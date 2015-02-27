class Group < ActiveRecord::Base
  validates :title, presence: true

  has_many(
  :memberships,
  class_name: :GroupMembership,
  foreign_key: :group_id,
  primary_key: :id,
  dependent: :destroy
  )

  has_many(
  :link_memberships,
  class_name: :LinkMembership,
  foreign_key: :group_id,
  primary_key: :id,
  dependent: :destroy
  )



  has_many :members, through: :memberships, source: :member
  has_many :posts, through: :link_memberships, source: :post
  has_many :group_messages
end
