from firebase_functions import https_fn
from firebase_admin import firestore, storage
import json
from datetime import datetime, timedelta
import asyncio
import uuid
import copy

from openai import OpenAI
import asyncio
from dotenv import load_dotenv
import os
# import json
import time
from openai import BadRequestError
import requests

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY_KAL")
)

#############################
# GET - 料理レシピを取得する
#############################
def get_cooking_recipe(req: https_fn.Request) -> https_fn.Response:
    # レシピのタイトル
    material = req.args.get("material")
    if not material:
        return https_fn.Response(status=400, body="material is required")
    aji_type = req.args.get("aji_type")
    if not aji_type:
        return https_fn.Response(status=400, body="aji_type is required")

    functions = [
        {
            "name": "generate_recipe",
            "description": "指定されたフォーマットでレシピを出力する",
            "parameters": {
            "type": "object",
            "properties": {
                "title": {
                    "type": "string",
                    "description": "レシピのタイトル"
                },
                "material": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "description": "食材の名前"
                    },
                    "minItems": 3,
                    "maxItems": 3
                },
                "recipe": {
                    "type": "string",
                    "description": "レシピの内容"
                },
                "taste": {
                    "type": "string",
                    "description": "どういう味がするのか"
                }
            },
            "required": [
                "title",
                "material",
                "recipe",
                "taste"
            ]
        }
        },
    ]

    system_order = f"""
    ## あなたの役割
    あなたは料理のプロフェッショナルです。子供向けの楽しいレシピを作成してください。

    ## 出力する文章
    以下の構成としてください
    - りょうりのなまえ
    - つかう「しょくざい」
    - レシピのてじゅん
    - どうゆう「あじ」がするのか？

    ## 条件
    - なまえはわかりやすく楽しいものにして
    - 子供でもわかりやすいレシピとすること
    - 子供も大人も美味しいと思えるような料理にしてください
    - なるべく独創的なレシピとしてください、ただし美味しいが前提です
    - 当然、調味料などは追加で利用できます
    - これは子供の教育目的です。複雑な内容にはしないでください。
    - これは子供の教育目的です。あじのイメージは感情豊かな表現としてください。
    - 小学生低学年が読める漢字のみ使用してOKです
    """

    user_order = f"""
    使う食材３つ:
    {material}

    料理の味付けタイプ:
    {aji_type}
    """
    try:
        result = client.chat.completions.create(
            # model="gpt-3.5-turbo",
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": system_order,
                },
                {
                    "role": "user",
                    "content": user_order,
                },
            ],
            functions=functions,
            function_call={"name": "generate_recipe"},
            temperature=0.7,
            top_p=0.9,
            frequency_penalty=0.5,
            presence_penalty=0.5,
            max_tokens=4096,
        )

        # Parse response in JSON format
        # parsedResult = result.choices[0].message.function_call.arguments
        parsedResult = json.loads(result.choices[0].message.function_call.arguments)

        # レシピ情報をもとにイメージ画像をdalle-3で作成する
        # DALL-E 3を使用して画像を生成
        image_prompt = f"""
        レシピのイメージ画像を作成してください。
        ## レシピ情報
        ### レシピのタイトルは以下の通りです。
        {parsedResult["title"]}
        ### レシピの材料は以下の通りです。
        {parsedResult["material"]}
        ### レシピの内容は以下の通りです。
        {parsedResult["recipe"]}
        ### レシピの味は以下の通りです。
        {parsedResult["taste"]}

        ## 条件
        - レシピの作成手順を時間をかけて理解をして、完成された料理を描いてください
        - 料理が完成された後の「一枚絵」としてください
        - 美味しそうな写真のような画像としてください
        """
        image_response = client.images.generate(
            model="dall-e-3",
            prompt=image_prompt,
            size="1024x1024",
            quality="standard",
            n=1
        )
        # 新しい生成された画像のURLを取得
        image_url = image_response.data[0].url
        print("### image_url: ", image_url)

        # レシピ情報にイメージ画像を追加
        parsedResult["image"] = image_url

        # レシピ情報をFirestoreに保存
        recipe_registration(copy.deepcopy(parsedResult), image_url)

        return https_fn.Response(json.dumps(parsedResult), mimetype="application/json")
    except BadRequestError as e:
        print(f"OpenAI API error: {e}")
        return https_fn.Response(status=400, body="レシピの生成中にエラーが発生しました。別の食材や味付けタイプをお試しください。")
    except Exception as e:
        print(f"Unexpected error: {e}")
        return https_fn.Response(status=500, body="サーバーエラーが発生しました。しばらくしてから再度お試しください。")
    

def recipe_registration(recipe_data, image_url):
    try:
        # Storageにイメージを保存
        bucket = storage.bucket()
        image_data = requests.get(image_url).content
        unique_filename = f"{uuid.uuid4()}.jpg"
        blob = bucket.blob(f"recipe_images/{unique_filename}")

        # ダウンロードトークンを生成
        download_token = str(uuid.uuid4())
        metadata = {"firebaseStorageDownloadTokens": download_token}
        blob.metadata = metadata

        blob.upload_from_string(image_data, content_type='image/jpeg')
        
        # アップロードしたファイルの公開URLを取得
        public_image_url = f"https://firebasestorage.googleapis.com/v0/b/{bucket.name}/o/recipe_images%2F{unique_filename}?alt=media&token={download_token}"
        
        # Firestoreにレシピデータを保存
        db = firestore.client()
        recipe_ref = db.collection('recipes').document()
        recipe_data['image'] = public_image_url
        recipe_data['date'] = firestore.SERVER_TIMESTAMP  # サーバーのタイムスタンプを使用
        recipe_ref.set(recipe_data)

        return https_fn.Response(json.dumps({"message": "レシピが正常に登録されました", "id": recipe_ref.id}), mimetype="application/json")
    except Exception as e:
        print(f"レシピ登録エラー: {e}")
        return https_fn.Response(status=500, body="レシピの登録中にエラーが発生しました。")
    

#############################
# GET - 既存の料理レシピを取得する
#############################
def get_existing_recipes(req: https_fn.Request) -> https_fn.Response:
    try:
        PAGE_SIZE = 8
        firestore_client = firestore.client()
        query = firestore_client.collection("recipes")

        # クエリパラメータからpageを取得
        page = int(req.args.get("page")) if req.args.get("page") else 1

        # dateの降順でクエリを設定
        query = query.order_by("date", direction=firestore.Query.DESCENDING)
        
        # ページネーションの設定
        recipes = query.offset((page - 1) * PAGE_SIZE).limit(PAGE_SIZE + 1).get()

        recipes_list = []
        for i, doc in enumerate(recipes):
            if i < PAGE_SIZE:  # 対象ドキュメントのみ処理
                data = doc.to_dict()
                recipes_list.append({
                    "id": doc.id,
                    "title": data["title"],
                    "material": data["material"],
                    "recipe": data["recipe"],
                    "taste": data["taste"],
                    "image": data["image"],
                    "date": data["date"].isoformat()
                })

        has_next_page = len(recipes) > PAGE_SIZE
        response_data = {
            "recipes": recipes_list,
            "hasNextPage": has_next_page
        }

        return https_fn.Response(json.dumps(response_data), mimetype="application/json")
    except Exception as e:
        # エラーメッセージをログに記録
        print(f"レシピの取得中にエラーが発生しました: {str(e)}")
        # クライアントにエラーレスポンスを返す
        return https_fn.Response(json.dumps({"error": "レシピの取得中にエラーが発生しました"}), status=500, mimetype="application/json")