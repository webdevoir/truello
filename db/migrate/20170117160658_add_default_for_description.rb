class AddDefaultForDescription < ActiveRecord::Migration[5.0]
  def change
    change_column :cards, :description, :text, null: false, default: ""
  end
end
