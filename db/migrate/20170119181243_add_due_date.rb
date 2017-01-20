class AddDueDate < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :due_date, :timestamp
  end
end
