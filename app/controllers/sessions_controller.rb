class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:email],
    params[:user][:password])

    if user
      sign_in!(user)
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
