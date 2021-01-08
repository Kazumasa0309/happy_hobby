class Message < ApplicationRecord
  belongs_to :community
  belongs_to :user
  has_one_attached :image
end
