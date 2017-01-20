class Comment < ApplicationRecord
  validates :card, :author, :text, presence: true

  belongs_to :card

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
end
