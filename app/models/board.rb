class Board < ApplicationRecord
  validates :name, :owner, presence: true

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  has_many :lists, dependent: :destroy
end
