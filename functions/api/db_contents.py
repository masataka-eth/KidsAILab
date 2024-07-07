from firebase_functions import https_fn
from firebase_admin import firestore
import json
from datetime import datetime, timedelta

#############################
# POST - コンテンツを追加する
#############################
def add_contents(req: https_fn.Request) -> https_fn.Response:
    if not req.data:
        return https_fn.Response("No data provided", status=400)
    
    data = json.loads(req.data)
    google_id = data["google_id"]
    content_id = data["content_id"]
    title = data["title"]
    pages = data["pages"]

    firestore_client = firestore.client()
    content_data = {
        "google_id": google_id,
        "content_id": content_id,
        "date": datetime.now(),
        "title": title
    }

    # コンテンツのメタデータを保存
    content_ref = firestore_client.collection("contents").document(content_id)
    content_ref.set(content_data)

    # 各ページを個別に保存
    for page in pages:
        page_data = {
            "page_number": page["page_number"],
            "page_url": page["page_url"]
        }
        content_ref.collection("pages").document(str(page["page_number"])).set(page_data)

    return https_fn.Response(json.dumps({"success": True}), mimetype="application/json")

#############################
# GET - コンテンツ一覧を取得する
#############################
# def get_contents_list(req: https_fn.Request) -> https_fn.Response:
#     PAGE_NUM = 10
#     firestore_client = firestore.client()
#     query = firestore_client.collection("contents")

#     google_id = req.args.get("google_id")
#     last_date = req.args.get("last_date")
#     last_id = req.args.get("last_id")

#     if google_id:
#         query = query.where("google_id", "==", google_id)

#     query = query.order_by("date", direction=firestore.Query.DESCENDING)
#     query = query.order_by("content_id", direction=firestore.Query.DESCENDING)

#     if last_date and last_id:
#         query = query.start_after({
#             "date": datetime.fromisoformat(last_date),
#             "content_id": last_id
#         })

#     contents = query.limit(PAGE_NUM + 1).get()

#     contents_list = []
#     for i, doc in enumerate(contents):
#         if i < PAGE_NUM:
#             data = doc.to_dict()
#             contents_list.append({
#                 "content_id": data["content_id"],
#                 "date": data["date"].isoformat(),
#                 "title": data["title"]
#             })

#     has_next_page = len(contents) > PAGE_NUM
#     last_item = contents_list[-1] if contents_list else None

#     response_data = {
#         "contents": contents_list,
#         "hasNextPage": has_next_page,
#         "lastDate": last_item["date"] if last_item else None,
#         "lastId": last_item["content_id"] if last_item else None
#     }

#     return https_fn.Response(json.dumps(response_data), mimetype="application/json")

def get_contents_list(req: https_fn.Request) -> https_fn.Response:
    PAGE_NUM = 8
    firestore_client = firestore.client()
    query = firestore_client.collection("contents")

    # クエリパラメータからgoogle_idとpageを取得
    google_id = req.args.get("google_id")
    # if not google_id:
    #     return https_fn.Response(json.dumps({"error": "google_id is required"}), status=400, mimetype="application/json")
    page = int(req.args.get("page")) if req.args.get("page") else 1
    print("page: ", page)

    if google_id:
        query = query.where("google_id", "==", google_id)
    print("google_id: ", google_id)

    query = query.order_by("date", direction=firestore.Query.DESCENDING)
    contents = query.offset((page - 1) * PAGE_NUM).limit(PAGE_NUM+1).get()

    # !!! 一時的にこちらでソートしている
    # contents = sorted(contents, key=lambda x: x.to_dict().get("date"), reverse=True)
    # print("contentsの数: ", len(contents))

    contents_list = []
    for i, doc in enumerate(contents):
        if i < PAGE_NUM:  # 対象ドキュメントのみ処理
            data = doc.to_dict()
            contents_list.append({
                "content_id": data["content_id"],
                "date": data["date"].isoformat(),
                "title": data["title"]
            })

    has_next_page = len(contents) > PAGE_NUM
    response_data = {
        "contents": contents_list,
        "hasNextPage": has_next_page
    }

    return https_fn.Response(json.dumps(response_data), mimetype="application/json")

# def get_contents_list(req: https_fn.Request) -> https_fn.Response:
#     firestore_client = firestore.client()
#     query = firestore_client.collection("contents")

#     # クエリパラメータからgoogle_idを取得
#     google_id = req.args.get("google_id")
#     # if not google_id:
#     #     return https_fn.Response(json.dumps({"error": "google_id is required"}), status=400, mimetype="application/json")

#     if google_id:
#         query = query.where("google_id", "==", google_id)

#     # orderbyするとFirestoreのクエリがエラーになるため一時的にコメントアウト
#     query = query.order_by("date", direction=firestore.Query.DESCENDING)
#     contents = query.get()

#     # !!! 一時的にこちらでソートしている
#     contents = sorted(contents, key=lambda x: x.to_dict().get("date"), reverse=True)

#     contents_list = []
#     for doc in contents:
#         data = doc.to_dict()
#         contents_list.append({
#             "content_id": data["content_id"],
#             "date": data["date"].isoformat(),
#             "title": data["title"]
#         })

#     response_data = {
#         "contents": contents_list
#     }

#     return https_fn.Response(json.dumps(response_data), mimetype="application/json")

#############################
# GET - コンテンツ詳細を取得する
#############################
def get_contents_detail(req: https_fn.Request) -> https_fn.Response:
    content_id = req.args.get("content_id")
    if not content_id:
        return https_fn.Response(json.dumps({"error": "content_id is required"}), status=400, mimetype="application/json")
    print("content_id: ", content_id)
    firestore_client = firestore.client()
    content_ref = firestore_client.collection("contents").document(content_id)
    print("content_ref: ", content_ref)
    content = content_ref.get()
    
    if not content.exists:
        return https_fn.Response(json.dumps({"error": "Content not found"}), status=404, mimetype="application/json")
    
    content_data = content.to_dict()
    
    # datetime オブジェクトを ISO 形式の文字列に変換
    if 'date' in content_data:
        content_data['date'] = content_data['date'].isoformat()
    
    # ページデータを取得
    pages = content_ref.collection("pages").order_by("page_number").get()
    content_data["pages"] = [page.to_dict() for page in pages]
    
    return https_fn.Response(json.dumps(content_data), mimetype="application/json")
