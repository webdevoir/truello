class Sharing < ApplicationRecord
  validates :board, :member, presence: true

  belongs_to :board
  belongs_to :member,
             primary_key: :id,
             foreign_key: :member_id,
             class_name: :User

end
