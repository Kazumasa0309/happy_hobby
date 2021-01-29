# アプリ名： Happy-Hobby

# アプリの概要
- その人に合う趣味を診断
- 趣味のコミュニティを作成 or 入る

# 各機能の実装内容と目的
## 趣味診断機能
新しい趣味が欲しい、趣味がなくて悩んでいる人のために<br>
合いそうな趣味のカテゴリーを提示し、具体的なモノを2つ提案する。

## 趣味コミュニティ作成機能
趣味診断で自分に合いそうな趣味をみつけても、それを今日からすぐに継続させるのは難しい。<br>
趣味を継続させるのに必要なのは「仲間」と考えたので、その仲間を見つけるための機能

# 実装機能
- 趣味診断機能
- ユーザー管理機能（gem:devise）
- コミュニティ新規作成・削除機能
- コミュニティ内でのチャット機能

# 本番環境（デプロイ先とテストアカウント＆ID）
- GitHub:https://github.com/Kazumasa0309/happy_hobby
- デプロイ先:https://happy-hobby.herokuapp.com/
- Basic認証: User:admin / Password: 7535 
- テストアカウント: Email: sample0@gmail.com / Password: test_user0

# 工夫ポイント
- 趣味診断で回答するたびにページ遷移せずに画面が切り替わるように実装したこと。
- 趣味診断の質問と結果の辻褄が合うように文章を考えたこと。
- 趣味診断機能の結果にて提示する趣味を2つに絞っていること。<br>
  人は選択肢が多ければ多いほど悩む生き物で、最悪考えることをやめてしまうことがあるので選択肢を少なくすることにした。

# 使用技術（開発環境）
- 言語：HTML/CSS, ruby, JavaScript
- フレームワーク：Ruby on Rails
- DB：mysql
- サーバー：AWS

# 課題や今後実装したい機能
- 動画投稿機能
- コミュニティ詳細表示・編集機能
- コミュニティ検索機能
- コミュニティ申請・許可機能
- コミュニティ内のチャット部屋が掲示板のようになっているので、
  LINEのようにわかりやすい見た目に編集したい。

# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| nickname           | string | null: false               |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |

### Association

- has_many :users_communities
- has_many :communities, through: users_communities
- has_many :messages

## communities テーブル

| Column   | Type      | Options                        |
| -------- | --------- | ------------------------------ |
| name     | string    | null: false                    |
| category | string    | null: false                    |
| profile  | text      | null: false                    |

### Association

- has_many :users_communities
- has_many :users, through: users_communities
- has_many :messages

## users_communities テーブル

| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| community | references | null: false, foreign_key: true |
| user      | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :community

## messages テーブル

| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| content   | string     |                                |
| user      | references | null: false, foreign_key: true |
| community | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :community
