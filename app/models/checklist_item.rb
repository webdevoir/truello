class ChecklistItem < ApplicationRecord
  validates :checklist, :description, presence: true
  validates :size, inclusion: { in: [true, false] }

  belongs_to :checklist
end
