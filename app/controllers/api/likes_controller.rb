class Api::LikesController < ApplicationController
  # wrap_parameters :favorite, include: [:post_id, :how_much
  def create
    @like = current_user.likes.new(likes_params)

    if @like.save
      render json: @like
    else
      render json: 'error'
    end

  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy!
    render json: @like

  end

  def likes_params
    params.require(:like).permit(:post_id)
  end

end
