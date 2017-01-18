class AddCardListOrder < ActiveRecord::Migration[5.0]
  def change
    remove_index :cards, :list_order
    add_index :cards, [:list_id, :list_order], unique: true
  end
end
