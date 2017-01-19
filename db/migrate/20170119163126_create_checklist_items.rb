class CreateChecklistItems < ActiveRecord::Migration[5.0]
  def change
    create_table :checklist_items do |t|
      t.integer :checklist_id, null: false
      t.string :description, null: false
      t.boolean :done, null: false, default: false

      t.timestamps
    end
    add_index :checklist_items, :checklist_id
  end
end
