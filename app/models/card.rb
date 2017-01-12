class Card < ApplicationRecord
  validates :name, :description, :list, presence: true

  belongs_to :list
end
