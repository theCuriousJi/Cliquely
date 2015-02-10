class Comment < ActiveRecord::Base
  validates :text, :user, :post, null: false
  belongs_to :user
  belongs_to :post

end
