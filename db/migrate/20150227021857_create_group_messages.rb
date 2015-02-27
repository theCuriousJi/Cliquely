class CreateGroupMessages < ActiveRecord::Migration
  def change
    create_table :group_messages do |t|
      t.text :text, null: false
      t.integer :group_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
