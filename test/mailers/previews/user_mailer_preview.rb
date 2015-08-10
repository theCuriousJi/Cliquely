# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  def new_post_mail_preview
    UserMailer.new_post_mail(User.first, User.last, Post.first)
  end

end
