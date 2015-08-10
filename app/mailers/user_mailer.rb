

class UserMailer < ApplicationMailer
  default from: "no-reply@cliquely.io"

  # def new_post_mail(post)
  #   @poster = post.user
  #   @groups = post.groups
  #   members = Set.new
  #   post.groups.each do |group|
  #     group.members.each do |member|
  #     members << member if !members.include?(member)
  #     end
  #   end
  #   members.each do |member|
  #     next if member.id == poster.id
  #     @post = post
  #     @member = member
  #     mail(to: @member.email, subject: '<%=poster%> made a new post to <%= @group%>!')
  #   end
  # end

  def new_post_mail(member, poster, post)
    @member = member
    @poster = poster
    byebug
    mail to: "gauravnagpal19@gmail.com", subject: "#{@poster.fname} made a new post!"
  end
end
