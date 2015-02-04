class Post < ActiveRecord::Base
  validates :user_id, :title, :url, presence: true
  
end
