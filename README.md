# hacker-topic-web

## セットアップ

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## アプリとしてやりたいこと  
  
QiitaのAPIで記事を取得する。  
最新一覧と、検索語句を登録して関連する記事などの引っ張り方もする。  



## テーブル一覧

### users

|id  |name  |email  |created_at  |update_at  |is_delete  |
|---|---|---|---|---|---|

### tags

|id  |user_id  |tag_name  |created_at  |update_at  |is_delete  |
|---|---|---|---|---|---|

### favorites

|id  |user_id  |content_id  |created_at  |update_at  |is_delete  |
|---|---|---|---|---|---|



## 技術面でやりたいことTODO
  

- [x] Jest仮置き
- [ ] CircleCI  
- [ ] Docker  
- [ ] Mysql接続  
- [ ] テーブル作成  
- [x] テーブル構成をREADMEに記載  
- [ ] ログイン機能  
- [ ] ログアウト機能  
- [ ] ログイン失敗バー  
- [ ] お気に入りハート表示  
- [ ] お気に入り機能(非同期)  
- [ ] お気に入りページ  
- [ ] タグ管理ページ  
- [ ] タグページ  
  
- [ ] CardのJestのパス  
