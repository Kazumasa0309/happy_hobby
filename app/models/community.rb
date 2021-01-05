class Community < ApplicationRecord
  has_many :users_communities
  has_many :users, through: :communities_users
end
