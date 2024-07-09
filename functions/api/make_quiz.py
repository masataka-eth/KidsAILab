from firebase_functions import https_fn
import json
from datetime import datetime, timedelta
from openai import OpenAI
import asyncio
from dotenv import load_dotenv
import os
import json

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY_KAL")
)

#############################################
# クイズの問題を作る
#############################################
def make_quiz(req: https_fn.Request):
    level = req.args.get('level')
    functions = [
        {
            "name": "generate_quiz",
            "description": "指定されたフォーマットでクイズを生成する",
            "parameters": {
            "type": "object",
            "properties": {
                "quiz": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "quizNo": {
                                "type": "integer",
                                "description": "クイズNo（0 - 2）"
                            },
                            "question": {
                                "type": "string",
                                "description": "問題"
                            },
                            "word": {
                                "type": "string",
                                "description": "questionの文字の中で最も代表的な単語を抽出する"
                            },
                            "correctAnswer": {
                                "type": "integer",
                                "description": "正解番号（0 - 3）"
                            },
                            "wisdomInformation": {
                                "type": "string",
                                "description": "この問題のとても勉強になるような解説"
                            },
                            "answerChoices": {
                                "type": "object",
                                "properties": {
                                    "answer0": {
                                        "type": "string",
                                        "description": "回答選択肢0"
                                    },
                                    "answer1": {
                                        "type": "string",
                                        "description": "回答選択肢1"
                                    },
                                    "answer2": {
                                        "type": "string",
                                        "description": "回答選択肢2"
                                    },
                                    "answer3": {
                                        "type": "string",
                                        "description": "回答選択肢3"
                                    }
                                }
                            }
                        },
                        "required": ["quizNo", "word", "question", "correctAnswer", "answerChoices","wisdomInformation"]
                    },
                    "minItems": 3,
                    "maxItems": 3
                },
            },
            "required": [
                "quiz"
            ]
        }
        },
    ]

    system_order = f"""
    ## あなたの役割
    あなたは世界一のクイズ王です。誰よりも面白くいクイズを熟知しています。

    ## あなたに求めていること
    - 渡されたレベルに合致したクイズ情報を返してください
    - 以下の中から完全ランダムで3つの分野からクイズを作成してください
        1. 歴史
        2. 地理
        3. 文学
        4. 科学
        5. 数学
        6. 一般知識
        7. スポーツ
        8. エンターテインメント
        9. ポップカルチャー
        10. 食べ物と飲み物
        11. テクノロジー
        12. 言語と文学
    - levelは0〜100と1段階づつ難易度を変えること
    - levelごとに100問くらいの問題がありそこから毎回4つを選択してください

    ### レベルの概念
    - レベルが0〜100ある
        - 0〜10：5歳でも答えられるレベルの問題、ひらがなとカタカナだけの表示とする
        - 11〜20：小学生低学年（7歳から9歳くらい）が答えられるレベルの問題、簡単な漢字なら使ってOK
        - 21〜30：小学生高学年（10歳から12歳くらい）が答えられるレベルの問題、難しくない一般的な漢字なら使ってOK
        - 31〜40：中学生（13歳から15歳くらい）が答えられるレベルの問題
        - 41〜50：高校生（16歳から18歳くらい）が答えられるレベルの問題
        - 51〜60：一般の大人のクイズ一般レベルの問題
        - 61〜70：一般の大人のクイズ上級者レベルの問題
        - 71〜80：クイズ大会の初級レベルの問題
        - 81〜90：クイズ大会の中級レベルの問題
        - 91〜100：クイズ大会の上級レベルの問題
    """

    user_order = f"""
    # 与えられたレベル
    {level}
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
        function_call={"name": "generate_quiz"},
        temperature=0.85,
        top_p=0.9,
        frequency_penalty=0.2,
        presence_penalty=0.2,
        max_tokens=4096,
    )

    # Parse response in JSON format
    parsedResult = json.loads(result.choices[0].message.function_call.arguments)

    return https_fn.Response(json.dumps(parsedResult, ensure_ascii=False), mimetype="application/json")