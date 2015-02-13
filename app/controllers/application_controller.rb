class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  helper_method :current_user

  def require_signed_in!

  end

  def redirect_if_not_logged_in
    if !current_user
      redirect_to new_session_url
    end
  end

  def redirect_if_logged_in
    if current_user
      redirect_to root_url
    end
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= user = User.find_by_session_token(session[:session_token])
  end

  def sign_in!(user)
    session[:session_token] = user.reset_session_token
  end

  def sign_out!
    current_user.reset_session_token
    session[:session_token] = nil
  end


end
