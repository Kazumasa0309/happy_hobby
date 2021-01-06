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