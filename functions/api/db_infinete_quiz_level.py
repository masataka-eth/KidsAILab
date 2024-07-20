from firebase_functions import https_fn
from firebase_admin import firestore
import json
from datetime import datetime, timedelta

#############################
# POST - クイズのレベルを追加する
#############################
def update_quiz_level(req: https_fn.Request) -> https_fn.Response:
    if not req.data:
        return https_fn.Response("No data provided", status=400)
    
    # リクエストデータを取得
    data = json.loads(req.data)
    google_id = data.get("google_id")
    level = data.get("level")

    print(google_id, level)

    # データの検証
    if not google_id or not isinstance(level, int) or level < 0 or level > 100:
        return https_fn.Response(json.dumps({"error": "Invalid data."}), status=400)

    # Firestoreクライアントを初期化
    db = firestore.client()

    # ドキュメントを更新または作成
    doc_ref = db.collection("infinete_quiz_level").document(google_id)
    doc_ref.set({"level": level}, merge=True)

    return https_fn.Response(json.dumps({"success": True}), status=200)

#############################
# GET - クイズのレベルを取得する
#############################
def get_quiz_level(req: https_fn.Request) -> https_fn.Response:
    # リクエストデータを取得
    google_id = req.args.get("google_id")
    print(google_id)

    # Firestoreクライアントを初期化
    db = firestore.client()
    # ドキュメントを取得
    doc_ref = db.collection("infinete_quiz_level").document(google_id)
    doc = doc_ref.get()

    if doc.exists:
        level = doc.to_dict().get("level", 0)
        return https_fn.Response(json.dumps({"level": level}), status=200)
    else:
        return https_fn.Response(json.dumps({"level": 0}), status=200)
    

#############################
# GET - クイズのレベルTOP10を取得する
#############################
# def get_quiz_level_top10(req: https_fn.Request) -> https_fn.Response:
#     # Firestoreクライアントを初期化
#     db = firestore.client()
#     # ドキュメントを取得
#     doc_ref = db.collection("infinete_quiz_level").order_by("level", direction=firestore.Query.DESCENDING).limit(10)
#     docs = doc_ref.stream()
    
#     # 結果をリストに格納
#     top_10 = []
#     for doc in docs:
#         data = doc.to_dict()
#         top_10.append({
#             "id": doc.id,
#             "level": data.get("level", 0)
#         })
    
#     return https_fn.Response(json.dumps({"top_10": top_10}), status=200)
def get_quiz_level_top10(req: https_fn.Request) -> https_fn.Response:
    # Firestoreクライアントを初期化
    db = firestore.client()
    # ドキュメントを取得
    doc_ref = db.collection("infinete_quiz_level").order_by("level", direction=firestore.Query.DESCENDING).limit(10)
    docs = doc_ref.stream()
    
    # 結果をリストに格納
    top_10 = []
    for doc in docs:
        data = doc.to_dict()
        user_id = doc.id
        user_doc = db.collection("users").document(user_id).get()
        user_name = user_doc.get("name") if user_doc.exists else "unknown"
        
        top_10.append({
            "id": user_id,
            "name": user_name,
            "level": data.get("level", 0)
        })
    
    return https_fn.Response(json.dumps({"top_10": top_10}), status=200)