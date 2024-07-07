from firebase_functions import https_fn
from firebase_admin import firestore, storage
import json
from datetime import datetime, timedelta
import asyncio
import uuid

from utils.generate_contents import generate_sentence,generate_illustrations
from utils.create_book import create_storybook_page

#############################
# POST - 絵本コンテンツを作る
#############################
def make_contents(req: https_fn.Request) -> https_fn.Response:
    # POSTのbodyから解析する文字列を取得
    # bodyがなければ404エラーを返す
    if not req.data:
        return https_fn.Response("No data provided", status=400)
    
    data = json.loads(req.data)
    google_id = data["google_id"]
    text_data = data["text_data"]

    generated_sentence = asyncio.run(generate_sentence(text_data))
    print("### generated_sentence: ", generated_sentence)
    generated_sentence_dict = json.loads(generated_sentence)
    generated_illustrations = asyncio.run(generate_illustrations(generated_sentence_dict['pages'][:8]))
    print("### generated_illustrations: ", generated_illustrations)

    # Storageのバケットを取得
    bucket = storage.bucket()
    print("### bucket: ", bucket)

    content_id = google_id + datetime.now().strftime('%Y%m%d%H%M%S')
    print("### content_id: ", content_id)
    # firestore_client = firestore.client()
    response_data = {
        "google_id": google_id,
        "content_id": content_id,
        "title": generated_sentence_dict['title'],
        "pages": []
    }

    for i, page in enumerate(generated_sentence_dict['pages'][:8]):
        print("### page: ", page)
        print("### generated_illustrations[i]: ", generated_illustrations[i])
        book_page = asyncio.run(create_storybook_page(generated_illustrations[i], page))
        print("### book_page: done")
        
        file_name = f"contents/{content_id}/page_{i+1}.jpeg"
        blob = bucket.blob(file_name)
        
        download_token = str(uuid.uuid4())
        metadata = {"firebaseStorageDownloadTokens": download_token}
        blob.metadata = metadata

        blob.upload_from_string(book_page, content_type="image/jpeg")

        public_url = f"https://firebasestorage.googleapis.com/v0/b/{bucket.name}/o/{file_name.replace('/', '%2F')}?alt=media&token={download_token}"
        
        print("### public_url: ", public_url)

        page_data = {
            "page_number": i + 1,
            "page_url": public_url
        }
        response_data["pages"].append(page_data)

    return https_fn.Response(json.dumps(response_data), mimetype="application/json")