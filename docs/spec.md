## どんなサービスか

子供が簡単に自分だけの絵本を作れる

## サービス名

Kids AI Lab

## 基本設計

- バックエンド：Firebase Functions で Python Flask（OpenAI API コールと DB アクセスのみ）
  - Google ログインするとアカウント登録される
  - 絵本作成
    - 起承転結を渡す
      - ８ページの文章を FunctionCall を用いて Json で返す
        - 8 ページ分の文章を渡すとその挿絵を作って Storage に登録する
          - ページごとの jpeg を登録
            - 情報をデータベースに登録
  - 絵本一覧取得
  - 絵本詳細 jpeg 取得
- データベース：Firebase Firestore
  - ユーザーマスタ
    - GoogleID 一意の値
    - お名前
    - 画像 url
    - 登録日
  - ページ文章※不要なら削りたい
    - ID
    - GoogleID
    - コンテンツ ID（GoogleID+YYYYMMDDHHmmss）
    - ページページ Index（1 - 8）
    - 文章
  - ページ挿絵※不要なら削りたい
    - ID
    - GoogleID
    - コンテンツ ID（GoogleID+YYYYMMDDHHmmss）
    - ページページ Index（1 - 8）
    - jpeng_url
  - 絵本コンテンツ
    - ID
    - GoogleID
    - コンテンツ ID（GoogleID+YYYYMMDDHHmmss）
    - ページ Index（1 - 8）
    - jpeg_url
- フロントエンド：Vue.js を Firebase Hosting に構築
  - Google ログイン
  - とりあえずメニューは「AI で絵本をつくる」だけ
    - 絵本をつくる
      - 「絵本をつくってみる」ボタン
        - ボタンを押すとポップアップ表示
        - 4 つの項目を入力
          - 起/承/転/結の４つ
        - 完成するまでクルクル → 完成しましたポップアップ
      - 「つくった絵本をみてみる」表
        - 作成日時、タイトル、絵本を読むボタン
        - 絵本の表示をする
  - ログアウト

## 詳細設計

- 文章作成：GPT-4o で作成する
- 挿絵作成：GPT-4o の DALLE-3 で作成する
- インフラ
  - 全て Firebase で実現する
    - FE：hosting
    - ログイン：Auth
    - BE：Functions
    - DB：Firestore
    - ファイル保存：Storege
  - 生成 AI は OpenAI の API のみ
