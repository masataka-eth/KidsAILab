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

#############################################
# 文章を作成する
#############################################
async def generate_sentence(textData):
    functions = [
        {
            "name": "generate_sentence",
            "description": "指定されたフォーマットで文章を生成する",
            "parameters": {
            "type": "object",
            "properties": {
                "title": {
                    "type": "string",
                    "description": "絵本のタイトルを出力する"
                },
                "pages": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "description": "各ページの文章を出力する"
                    },
                    "minItems": 8,
                    "maxItems": 8
                },
            },
            "required": [
                "pages"
            ]
        }
        },
    ]

    system_order = f"""
    # あなたは誰か
    世界で最も面白い絵本の文章を作ることができるライターです。

    # 命��
    与えられたインプット情報から最高に面白い文章を考えてアウトプットします。
    """

    user_order = f"""
    # インプット情報
    {textData}

    ## アウトプットの条件
    - インプット情報から20文字以内でタイトルを出力してください
    - 1ページ250文字以内で8ページ作成します
    - 必ず8ページであること
    - 基本はひらがなとカタカナと数字だけ文章を作ってください
    - 子供でも楽しめるような内容にすること
    - 教育上好ましくないような表現は使わないこと
    - 大人でも子供でもわくわくするような面白いストーリーにすること
    - エンタメとして誰にも負けないようなクォリティーにすること
    - なるべくハッピーエンドにすること

    ## アウトプットのフォーマット
    指定されたJson形式で返すこと
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
        function_call={"name": "generate_sentence"},
        temperature=1.0,
        top_p=0.95,
        frequency_penalty=0.3,
        presence_penalty=0.3,
        max_tokens=4096,
    )

    # Parse response in JSON format
    parsedResult = result.choices[0].message.function_call.arguments

    return parsedResult

#############################################
# 画像を作成する -> gpt-4oの会話履歴を利用してdall-e-3で画像を作成する
#############################################
async def generate_illustrations(sentences):
    prompt_order = f"""
        # あなたは誰か
        世界で一番売れている絵本の絵を描いているプロの画家です。

        # 命令
        - 与えられた最後のrole:user.contentの文章にマッチした挿絵をDALL-E-3で描くための"プロンプトだけ"を出力してください。
        - 画像は同じ絵本の挿絵に使われます。よって、全ての画風が毎回同じになるようにプロンプトで詳細まで指定してください。
        - 期待している絵は毎回必ず同じプロンプトで出力してください
        - 毎回重要事項に関するプロンプトは毎回必ず同じプロンプトで出力してください
        - 超重要:必ずマークダウン形式で出力してください
        - 超重要:プロンプトにはhttpsではじまるURLを絶対に含めないでください

        ## 期待している絵
        - 子供でもすぐにわかるような内容とする
        - もしキャラクターを描くとなった場合に、表情があるなら豊かな表情にする
        - 絵本で最適な画風にしたいです。クレヨンと絵の具が使われてる感じが好ましいです
        - 昔ながらの絵本のような素朴な雰囲気が好ましいです
        - とにかく見ていて優しい気持ちになる絵が好ましいです
        - 特に子供が見て心がときめく画風にしてください

        ## 絶対に守るべき重要事項
        - 超重要:作成した絵の中には絶対に"文字"（abcdefg...など）を描かないこと
        - 超重要:画像の中に英語を書かないこと
        - 今まで登場したキャラクターであれば同じ要素で書くこと
        - 同じ会話の中では画風を揃えること、画像の雰囲気は同じであること
        - 特にメインのキャラクターは同じ特徴となるようなプロンプトにすること
    """

    # 初期の会話プロンプト
    conversation_history = [
        {"role": "system", "content": prompt_order}
    ]

    illustrations = []
    for sentence in sentences:
        conversation_history.append({"role": "user", "content": sentence})
        print("### conversation_history: ", conversation_history)
        
        max_retries = 3
        for attempt in range(max_retries):
            try:
                # GPT-4oを使用してプロンプトを解析
                gpt4o_response = client.chat.completions.create(
                    model="gpt-4o",
                    messages=conversation_history,
                    temperature=0.2,
                    top_p=0.7,
                    frequency_penalty=0.3,
                    presence_penalty=0.3,
                )
                # 新しい画像生成プロンプトを抽出
                image_prompt = gpt4o_response.choices[0].message.content
                print(f"### image_prompt (attempt {attempt + 1}): ", image_prompt)

                # DALL-E 3を使用して画像を生成
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

                # 会話履歴に新しい画像生成の結果を追加
                conversation_history.append({"role": "assistant", "content": image_url})
                illustrations.append(image_url)
                break  # 成功したらループを抜ける

            except BadRequestError as e:
                if 'content_policy_violation' in str(e) and attempt < max_retries - 1:
                    print(f"コンテンツポリシー違反エラー（試行 {attempt + 1}）。再試行します...")
                    time.sleep(1)  # 1秒待機してから再試行
                else:
                    print(f"画像生成に失敗しました（試行 {attempt + 1}）: {e}")
                    if attempt == max_retries - 1:
                        print("最大試行回数に達しました。次の文章に進みます。")
                        break
    
    return illustrations
