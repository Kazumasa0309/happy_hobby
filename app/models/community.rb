class Community < ApplicationRecord
  has_many :users_communities, dependent: :destroy
  has_many :users, through: :users_communities
  has_many :messages, dependent: :destroy
  has_one_attached :image

  with_options presence: true do
    validates :name
    validates :category
    validates :profile
    validates :image
  end
end
