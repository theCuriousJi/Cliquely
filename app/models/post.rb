require 'set'
class Post < ActiveRecord::Base
  after_save :send_notification_email

  validates :user_id, :title, :url, :group_ids, :tag_ids, presence: true


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
  has_many :likes,
  dependent: :destroy
  has_many :likers, through: :likes, source: :user
  has_many :comments
  has_many :groups, through: :link_memberships, source: :group

  def send_notification_email
    poster = self.user
    groups = self.groups
    mailed_to_members = Set.new
    groups.each do |group|
      group.members.each do |member|
      next if member.id == poster.id
        if !mailed_to_members.include?(member)
          mailed_to_members << member
          UserMailer.new_post_mail(member, poster, self).deliver_now
        end
      end
    end
  end
end
