class Post < ActiveRecord::Base
  validates :user_id, :title, :url, presence: true

  belongs_to :user

  has_many :link_memberships,
  dependent: :destroy
  # has_many(:link_memberships,
  # class_name: :LinkMembership,
  # foreign_key: :post_id,
  # primary_key: :id,
  # inverse_of: :post
  # )

  has_many :taggings,
  dependent: :destroy

  has_many :tags, through: :taggings, source: :tag


  has_many :groups, through: :link_memberships, source: :group


end
