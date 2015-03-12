class UsersController < ApplicationController
  # before_action :redirect_if_logged_in

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    sign_out! if current_user
    @user = User.new
    render :new
  end

  private
  def user_params
    params.require(:user).permit(:fname, :lname, :email, :password)
  end

end
