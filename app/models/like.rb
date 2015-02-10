class Like < ActiveRecord::Base
  validates :post_id, :user_id, presence: true
  validates :post, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :post
end
