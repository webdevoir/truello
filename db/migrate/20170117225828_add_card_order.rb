class AddCardOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :list_order, :integer, null: false
    add_index :cards, :list_order, unique: true
    add_index :cards, :list_id
    add_index :lists, :board_id
    add_index :boards, :owner_id
  end
end
