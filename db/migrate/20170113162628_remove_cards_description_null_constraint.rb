class RemoveCardsDescriptionNullConstraint < ActiveRecord::Migration[5.0]
  def change
    change_column_null :cards, :description, true
  end
end
