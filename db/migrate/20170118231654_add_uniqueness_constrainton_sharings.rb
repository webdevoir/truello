class AddUniquenessConstraintonSharings < ActiveRecord::Migration[5.0]
  def change
    add_index :sharings, [:board_id, :member_id], unique: true
  end
end
