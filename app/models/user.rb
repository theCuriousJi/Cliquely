class User < ActiveRecord::Base
  after_initialize :ensure_session_token
  attr_reader :password
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :fname, :lname, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true

  has_many(
  :memberships,
  class_name: :GroupMembership,
  foreign_key: :user_id,
  primary_key: :id,
  dependent: :destroy
  )

  has_many :likes,
  dependent: :destroy

  has_many :liked_posts, through: :likes, source: :post


  has_many :groups, through: :memberships, source: :group

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def is_member_of?(group)
    member = group.memberships.where(user_id: self.id)
    member.empty? ? false : true
  end

  def likes?(post)
    like = post.likes.where(user_id: self.id)
    like.empty? ? false : true
  end

  protected
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
