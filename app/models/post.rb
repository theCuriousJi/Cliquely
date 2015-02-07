class Post < ActiveRecord::Base
  validates :user_id, :title, :url, presence: true

  belongs_to :user

  has_many :link_memberships

  # inverse_of: :post / part of options hash

  has_many :groups, through: :link_memberships, source: :group


end
