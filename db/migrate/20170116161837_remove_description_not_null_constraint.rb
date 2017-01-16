class RemoveDescriptionNotNullConstraint < ActiveRecord::Migration[5.0]
  def change
    change_column :cards, :description, :text, null: true
  end
end
