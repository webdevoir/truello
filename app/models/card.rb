class Card < ApplicationRecord
  validates :name, :list, presence: true

  belongs_to :list
end
