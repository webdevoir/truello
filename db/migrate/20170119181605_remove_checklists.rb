class RemoveChecklists < ActiveRecord::Migration[5.0]
  def change
    drop_table :checklist_items
    drop_table :checklists
  end
end
