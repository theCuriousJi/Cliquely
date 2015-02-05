class Group < ActiveRecord::Base
  validates :title, presence: true

  has_many :group_memberships

  has_many :members, through: :group_memberships, source: :member
end
