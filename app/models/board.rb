class Board < ApplicationRecord
  validates :name, :owner, presence: true

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  has_many :lists, dependent: :destroy

  has_many :sharings,
           primary_key: :id,
           foreign_key: :board_id,
           class_name: :Sharing,
           dependent: :destroy

  has_many :members,
           through: :sharings,
           source: :member

  def has_member(member)
    members.include?(member)
  end
end
