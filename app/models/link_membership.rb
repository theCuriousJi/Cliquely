class LinkMembership < ActiveRecord::Base
  validates :post, :group_id, presence: true
  validates :group, uniqueness: {scope: :post_id}

  belongs_to :group
  belongs_to :post
end
