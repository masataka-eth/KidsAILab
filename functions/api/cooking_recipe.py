from firebase_functions import https_fn
from firebase_admin import firestore, storage
import json
from datetime import datetime, timedelta
import asyncio
import uuid

from openai import OpenAI
import asyncio
from dotenv import load_dotenv
import os
# import json
import time
from openai import BadRequestError

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
    世界最高の料理のプロです。子供も喜ばせる楽しいレシピを誰よりも熟知しています。

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
    使う食材３つです。今回は以下です。
    {material}
    """

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
    - 料理が完成された後の一枚絵としてください
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

    return https_fn.Response(json.dumps(parsedResult), mimetype="application/json")