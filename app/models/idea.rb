class Idea < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates :quality, presence: true
end
