class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.integer :list_id, null: false
      t.string :name, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
