class CreateChecklists < ActiveRecord::Migration[5.0]
  def change
    create_table :checklists do |t|
      t.string :name, null: false
      t.integer :card_id, null: false

      t.timestamps
    end
    add_index :checklists, :card_id
  end
end
