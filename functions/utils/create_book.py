import requests
from PIL import Image, ImageDraw, ImageFont
# import cv2
import numpy as np
from io import BytesIO

async def create_storybook_page(image_url, text,font_url="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap"):
    # A4の比率を保ちつつ、サイズを縮小（元のサイズの約1/3）
    width, height = 827, 1169  # A4の比率を保った縮小サイズ

    canvas = Image.new('RGB', (width, height), (255, 255, 255))

    # 画像を読み込み、正方形にリサイズしてキャンバスの上半分に配置
    response = requests.get(image_url)
    image = Image.open(BytesIO(response.content))
    image = await expand2square(image, (255, 255, 255))
    image = image.resize((width - 200, width - 200))  # 画像サイズ調整
    canvas.paste(image, (100, 50))  # 中央に配置するために位置を調整

    # Webフォントを読み込む
    response = requests.get(font_url)
    font_url = response.text.split("url(")[1].split(")")[0].replace("'", "")
    font_response = requests.get(font_url)
    font = ImageFont.truetype(BytesIO(font_response.content), 32)  # フォン��サズ

    # テキストをキャンバスの下半分に描画
    draw = ImageDraw.Draw(canvas)
    text_x = 80
    text_y = width - 50  # この値を小さくするとテキストを上に移動できる
    lines = await text_wrap(text)
    
    for line in lines:
        # getsize()の代わりにgetbbox()を使用
        bbox = font.getbbox(line)
        line_height = bbox[3] - bbox[1]  # 下端 - 上端
        draw.text((text_x, text_y), line, font=font, fill=(0, 0, 0))
        text_y += line_height + 5  # 行間を少し空ける

    # 画像に紙のような質感を追加
    def add_paper_texture(image):
        noise = np.random.normal(0, 5, (height, width, 3)).astype(np.uint8)
        noise_image = Image.fromarray(noise, 'RGB')
        blended = Image.blend(image, noise_image, alpha=0.1)
        return blended

    canvas_with_texture = add_paper_texture(canvas)
    
    # 画像をバイト列として返す
    img_byte_arr = BytesIO()
    canvas_with_texture.save(img_byte_arr, format='PNG')
    return img_byte_arr.getvalue()

async def expand2square(pil_img, background_color):
    width, height = pil_img.size
    if width == height:
        return pil_img
    elif width > height:
        result = Image.new(pil_img.mode, (width, width), background_color)
        result.paste(pil_img, (0, (width - height) // 2))
        return result
    else:
        result = Image.new(pil_img.mode, (height, height), background_color)
        result.paste(pil_img, ((height - width) // 2, 0))
        return result

async def text_wrap(text, max_chars=20):
    lines = []
    for i in range(0, len(text), max_chars):
        lines.append(text[i:i+max_chars])
    return lines