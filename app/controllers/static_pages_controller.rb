class StaticPagesController < ApplicationController
  # before_action :require_signed_in!
  before_action :redirect_if_not_logged_in

  def root
    render :root
  end
end
