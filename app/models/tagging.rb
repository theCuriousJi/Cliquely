class Tagging < ActiveRecord::Base
  validates :post, :tag_id, presence: true
  validates :post, uniqueness: {scope: :tag_id}

  belongs_to :tag
  belongs_to :post
end
