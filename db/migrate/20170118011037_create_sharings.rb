class CreateSharings < ActiveRecord::Migration[5.0]
  def change
    create_table :sharings do |t|
      t.integer :board_id, null: false
      t.integer :member_id, null: false

      t.timestamps
    end

    add_index :sharings, :board_id
    add_index :sharings, :member_id
  end
end
