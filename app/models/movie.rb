class Movie < ApplicationRecord
  belongs_to :user
  has_one_attached :poster
  has_many :reviews
end
