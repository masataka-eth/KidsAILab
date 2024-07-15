from openai import OpenAI
import asyncio
from dotenv import load_dotenv
import os
from openai import BadRequestError
import base64
import requests
import io

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY_KAL")
)

# URLから画像をダウンロードしてbase64エンコードする
def encode_image_from_url(image_url):
    response = requests.get(image_url)
    if response.status_code == 200:
        image_content = response.content
        return base64.b64encode(image_content).decode('utf-8')
    else:
        raise Exception(f"画像のダウンロードに失敗しました。ステータスコード: {response.status_code}")

#############################################
# 画像から料理を分析する
#############################################
async def analyze_food(image_url):
    print("image_url:", image_url)
    # 画像をURLからダウンロードしてbase64エンコード
    base64_image = encode_image_from_url(image_url)

    functions = [
        {
            "name": "analyze_food",
            "description": "画像から料理を分析し、指定されたフォーマットで情報を出力する",
            "parameters": {
                "type": "object",
                "properties": {
                    "dish_name": {
                        "type": "string",
                        "description": "料理名（日本語で）"
                    },
                    "ingredients": {
                        "type": "string",
                        "description": "原料名（日本語で、カンマ区切り）"
                    },
                    "total_calories": {
                        "type": "number",
                        "description": "総カロリー（単位：cal）"
                    },
                    "total_protein": {
                        "type": "number",
                        "description": "総タンパク質（単位：g）"
                    },
                    "total_fat": {
                        "type": "number",
                        "description": "総脂質（単位：g）"
                    },
                    "total_carbohydrates": {
                        "type": "number",
                        "description": "総炭水化物（単位：g）"
                    }
                },
                "required": [
                    "dish_name",
                    "ingredients",
                    "total_calories",
                    "total_protein",
                    "total_fat",
                    "total_carbohydrates"
                ]
            }
        },
    ]

    system_order = """
    あなたは以下の分野で世界一の専門家です：
    - 食品科学者
    - 栄養士

    以下の技術とツールを世界一活用できる能力を持っています：
    - デジタル画像処理とディープラーニング
    - 栄養分析ソフトウェア
    - 食品認識AI

    与えられた料理の画像から高精度で解析を行い、指定された情報を出力してください。
    """

    user_order = f"""
    この画像を分析し、以下の情報を提供してください：
    - 料理名（日本語で）
    - 原料名（日本語で、解析できたもの全てをカンマ区切りで）
    - 総カロリー（単位：cal）
    - 総タンパク質（単位：g）
    - 総脂質（単位：g）
    - 総炭水化物（単位：g）

    指定されたJSON形式で返してください。
    """

    result = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {
                "role": "system",
                "content": system_order,
            },
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": user_order},
                    # {"type": "image_url", "image_url": {"url": image_url}}
                    {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{base64_image}"}}
                ]
            },
        ],
        functions=functions,
        function_call={"name": "analyze_food"},
        temperature=0.7,
        top_p=0.9,
        frequency_penalty=0,
        presence_penalty=0,
        max_tokens=4096,
    )

    # Parse response in JSON format
    parsed_result = result.choices[0].message.function_call.arguments

    return parsed_result