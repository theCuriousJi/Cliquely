class GroupMembership < ActiveRecord::Base
  validates :group_id, :user_id, presence: true
  validates :group_id, uniqueness: {scope: :user_id}
end
