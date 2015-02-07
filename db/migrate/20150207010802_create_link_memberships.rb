class CreateLinkMemberships < ActiveRecord::Migration
  def change
    create_table :link_memberships do |t|
      t.integer :post_id, null: false
      t.integer :group_id, null: false
      t.timestamps null: false
    end
    add_index(
      :link_memberships, [:group_id, :post_id], :unique => true
    )
  end
end
