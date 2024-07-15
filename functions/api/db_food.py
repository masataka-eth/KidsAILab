from firebase_functions import https_fn
from firebase_admin import firestore, storage
import json
from datetime import datetime, timedelta
import os
import base64
import uuid
import asyncio

from utils.food_analysis import analyze_food

#############################
# POST -渡されたファイル情報をStorageにアップロード
#############################
def food_upload(req: https_fn.Request) -> https_fn.Response:
    try:
        # リクエストからデータを取得
        data = req.get_json()
        
        # Storageクライアントを初期化
        bucket = storage.bucket()
        
        # ファイル名とコンテンツを取得
        user_id = data['user_id']
        file_name = data['file_name']
        file_content = data['file_content']

        # Base64デコード
        decoded_content = base64.b64decode(file_content)

        # ファイル名から拡張子を取得
        _, extension = os.path.splitext(file_name)
        extension = extension.lower()[1:]  # 先頭のドットを除去し、小文字に変換
        
        # 許可された拡張子のリスト
        allowed_extensions = ['jpeg', 'jpg', 'png', 'webp']
        
        if extension not in allowed_extensions:
            return https_fn.Response(json.dumps({"error": "不正なファイル形式です"}), status=400)
        
        # コンテンツタイプを設定
        content_type = f'image/{extension}'
        if extension == 'jpg':
            content_type = 'image/jpeg'
        
        # Storageにファイルをアップロード
        blob = bucket.blob(f"foods/{file_name}")
        
        # ダウンロードトークンを生成
        download_token = str(uuid.uuid4())
        metadata = {"firebaseStorageDownloadTokens": download_token}
        blob.metadata = metadata

        blob.upload_from_string(decoded_content, content_type=content_type)
        
        # アップロードしたファイルの公開URLを取得
        public_url = f"https://firebasestorage.googleapis.com/v0/b/{bucket.name}/o/foods%2F{file_name}?alt=media&token={download_token}"
        print(public_url)

        analysis_result = asyncio.run(food_analysis(user_id, public_url))
        print("analysis_result:", analysis_result)
        
        return https_fn.Response(json.dumps({
            "message": "File uploaded successfully",
            "file_url": public_url
        }), status=200)
    except Exception as e:
        return https_fn.Response(json.dumps({"error": str(e)}), status=500)

#############################
# GET - 登録したデータを取得
#############################
def get_food_data(req: https_fn.Request) -> https_fn.Response:
    try:
        PAGE_NUM = 8
        db = firestore.client()
        
        # リクエストからパラメータを取得
        user_id = req.args.get('user_id')
        page = int(req.args.get('page', 1))
        
        # ユーザーIDに基づいてデータを取得
        query = db.collection('food_analysis').where('user_id', '==', user_id).order_by('date', direction=firestore.Query.DESCENDING)
        
        # ページネーション
        foods = query.offset((page - 1) * PAGE_NUM).limit(PAGE_NUM + 1).get()
        
        # 結果をリストに格納
        results = []
        for i, doc in enumerate(foods):
            if i < PAGE_NUM:
                data = doc.to_dict()
                if 'date' in data and isinstance(data['date'], datetime):
                    data['date'] = data['date'].isoformat()
                results.append(data)
        
        has_next_page = len(foods) > PAGE_NUM
        response_data = {
            "data": results,
            "hasNextPage": has_next_page
        }
        
        return https_fn.Response(json.dumps(response_data), mimetype="application/json")
    except Exception as e:
        return https_fn.Response(json.dumps({"error": str(e)}), status=500)

#############################
# りょうりを分析してFirebaseに登録
#############################
async def food_analysis(user_id: str, file_path: str) -> dict:
    try:
        # food_analysisモジュールを使用して画像を解析
        analysis_result = await analyze_food(file_path)
        print("analysis_result:", analysis_result)

        # 解析結果が文字列の場合、JSONとしてパースする
        if isinstance(analysis_result, str):
            import json
            analysis_result = json.loads(analysis_result)

        # UUIDを生成
        document_id = str(uuid.uuid4())

        # 解析結果をFirestoreに保存
        db = firestore.client()
        doc_ref = db.collection('food_analysis').document(document_id)
        doc_ref.set({
            'user_id': user_id,
            'date': datetime.now(),
            'dish_name': analysis_result.get('dish_name', ''),
            'ingredients': analysis_result.get('ingredients', ''),
            'total_calories': analysis_result.get('total_calories', 0),
            'total_protein': analysis_result.get('total_protein', 0),
            'total_fat': analysis_result.get('total_fat', 0),
            'total_carbohydrates': analysis_result.get('total_carbohydrates', 0),
            'image_url': file_path
        }, merge=True)

        # 解析結果をレスポンスとして返す
        return analysis_result

    except Exception as e:
        return {"error": str(e)}
    