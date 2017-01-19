class Checklist < ApplicationRecord
  validates :name, :card, presence: true

  belongs_to :card

  has_many :checklist_items
end
