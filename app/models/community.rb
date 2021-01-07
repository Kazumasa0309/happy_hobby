class Community < ApplicationRecord
  has_many :users_communities
  has_many :users, through: :users_communities
  has_one_attached :image
end
