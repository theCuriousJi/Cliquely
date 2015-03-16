class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:email],
    params[:user][:password])

    if user
        if user.email === 'guest1@gmail.com'
          user.memberships.delete_all
          GroupMembership.create!({user_id: user.id, group_id: 1})
          GroupMembership.create!({user_id: user.id, group_id: 2})
          GroupMembership.create!({user_id: user.id, group_id: 3})
          sign_in!(user)
        else
          sign_in!(user)
        end
      redirect_to root_url
    else
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

end
