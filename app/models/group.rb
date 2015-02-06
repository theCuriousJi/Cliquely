class Group < ActiveRecord::Base
  validates :title, presence: true

  has_many(
  :memberships,
  class_name: :GroupMembership,
  foreign_key: :group_id,
  primary_key: :id,
  dependent: :destroy
  )


  has_many :members, through: :memberships, source: :member
end
