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
    あなたは世界中の料理に精通した料理のプロフェッショナルです。特に子供が楽しめる料理のレシピに関する幅広い知識を持っています

    ## 期待する主力
    日本の一般的なスーパーマーケットで入手可能な食材を、ランダムに20個リストアップしてください。

    ## 条件
    1. 高いランダム性と多様性を確保するため、以下のカテゴリーから必ず1つ以上選択し、バランスよく組み合わせてください：
       - 野菜（葉物、根菜、果菜など）
       - 果物
       - 肉類（牛肉、豚肉、鶏肉、その他の肉）
       - 魚介類
       - 乳製品
       - 卵
       - 豆類・豆製品
       - 穀類（米、パン、麺類など）
       - 調味料・香辛料
       - 飲み物の材料
       - 乾物・缶詰
       - きのこ類
       - 海藻類
       - 冷凍食品
    2. 各カテゴリー内でも多様性を持たせてください。例えば、野菜を複数選ぶ場合は、葉物、根菜、果菜などから偏りなく選択してください。
    3. 季節性を考慮し、現在の季節に入手しやすい食材を中心に選んでください。ただし、年中入手可能な食材も適度に含めてください。
    4. 一般的な食材だけでなく、やや珍しいが入手可能な食材も含めてください。ただし、極端に珍しいものは避けてください。
    5. 必ず日本語で出力してください。子供が読みにくい漢字はひらがなにしてください。かっこを使ってはいけません。
    6. 12個くらいの食材はかなり珍しいものにしてください。ただし子供でもわかるものです。
    """

    user_order = f"""
    """

    result = client.chat.completions.create(
        # model="gpt-3.5-turbo",
        model="gpt-4o-mini",
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