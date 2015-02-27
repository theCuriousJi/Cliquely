class Api::CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      # id = @comment.post_id
      # @post = Post.find(id)
      render :show # need to render back user.fname, etc
    else
      render json: "error"
    end


  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: 'deleted'
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end


  def comment_params
    params.require(:comment).permit(:post_id, :text)
  end
end
