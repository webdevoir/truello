class Sharing < ApplicationRecord
  validates :board, :member, presence: true
  validates :board_id, uniqueness: { scope: :member_id }
  validate :ensure_not_owner

  belongs_to :board
  belongs_to :member,
             primary_key: :id,
             foreign_key: :member_id,
             class_name: :User

  def ensure_not_owner
    if board.owner_id == member_id
      errors.add(:owner, 'is not a valid member')
    end
  end
end
