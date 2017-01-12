class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
