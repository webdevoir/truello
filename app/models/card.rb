class Card < ApplicationRecord
  validates :name, :list, :list_order, presence: true
  validates :list_id, uniqueness: { scope: :list_order }

  belongs_to :list

  def self.max_list_order(list_id)
    Card.where(list_id: list_id).maximum(:list_order) || 0
  end

  def self.get_next_list_order(list_id)
    Card.max_list_order(list_id) + 1
  end
end
