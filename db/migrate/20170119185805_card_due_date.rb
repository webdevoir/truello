class CardDueDate < ActiveRecord::Migration[5.0]
  def change
    change_column :cards, :due_date, :date
  end
end
