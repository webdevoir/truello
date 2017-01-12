class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.integer :board_id, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
