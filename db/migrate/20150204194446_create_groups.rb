class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.string :description

      t.timestamps null: false
    end
    add_index :groups, :title
  end
end
