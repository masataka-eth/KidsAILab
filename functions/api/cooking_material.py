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
# GET - 料理材料を取得する
#############################
def get_cooking_materials(req: https_fn.Request) -> https_fn.Response:
    functions = [
        {
            "name": "generate_ingredients",
            "description": "指定されたフォーマットで食材を出力する",
            "parameters": {
            "type": "object",
            "properties": {
                "ingredients": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "description": "食材の名前"
                    },
                    "minItems": 20,
                    "maxItems": 20
                },
            },
            "required": [
                "ingredients"
            ]
        }
        },
    ]

    system_order = f"""
    ## あなたの役割
    世界最高の料理のプロです。子供も喜ばせる楽しいレシピを誰よりも熟知しています。

    ## 期待する主力
    ランダムな食品の材料を20個リストアップしてください

    ## 条件
    - このプロンプトを実行するたびに、材料は異なるものになるようにしてください
    - 高いランダム性と多様性を確保してください
    - 必ず日本語で出力してください
    - 子供が読みにくい漢字は使わないでください
    - 日本の一般的なスーパーで手に入りにくい食材は対象外としてください
    """

    user_order = f"""
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
        function_call={"name": "generate_ingredients"},
        temperature=0.8,
        top_p=0.9,
        frequency_penalty=0.5,
        presence_penalty=0.5,
        max_tokens=4096,
    )

    # Parse response in JSON format
    parsedResult = result.choices[0].message.function_call.arguments

    return parsedResult