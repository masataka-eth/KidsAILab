from firebase_functions import https_fn
from firebase_admin import firestore
import json
from datetime import datetime, timedelta

#############################
# POST - ユーザー情報を追加する
#############################
def add_user(req: https_fn.Request) -> https_fn.Response:
    try:
        data = req.get_json()
        google_id = data['google_id']
        
        db = firestore.client()
        
        # google_idが既に存在するかチェック
        existing_user = db.collection('users').document(google_id).get()
        if existing_user.exists:
            return https_fn.Response(json.dumps({'success': True, 'message': 'User already exists'}), status=200)
        
        name = data['name']
        image_url = data['image_url']
        registration_date = datetime.now().isoformat()

        user_data = {
            'google_id': google_id,
            'name': name,
            'image_url': image_url,
            'registration_date': registration_date
        }

        db.collection('users').document(google_id).set(user_data)
        # _, doc_ref = db.collection("users").add(user_data)

        return https_fn.Response(json.dumps({'success': True, 'message': 'User added successfully'}), status=200)
    except Exception as e:
        return https_fn.Response(json.dumps({'success': False, 'message': str(e)}), status=500)
