class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:email],
    params[:user][:password])

    if user
        if user.email === 'guest1@gmail.com'
          generate_user_data(user)
          sign_in!(user)
        else
          sign_in!(user)
        end
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid Email or Password"]
      render :new
    end
  end

  def new
    render :new
  end

  def destroy
    sign_out!
  render :new
  end

  def generate_user_data(user)
    Post.delete_all("user_id=2")
    Comment.delete_all("user_id=2")
    GroupMessage.delete_all("user_id=2")
    user.memberships.delete_all
    GroupMembership.create!({user_id: user.id, group_id: 1})
    GroupMembership.create!({user_id: user.id, group_id: 2})
    GroupMembership.create!({user_id: user.id, group_id: 3})
    Post.create!(title: "Why China's economy is slowing", url: "http://www.economist.com/blogs/economist-explains/2015/03/economist-explains-8", description: "", user_id: user.id, group_ids: [2], tag_ids: [4])
    Comment.create!({text: "This is awesome", post_id: 22, user_id: 2},)

  end

end
