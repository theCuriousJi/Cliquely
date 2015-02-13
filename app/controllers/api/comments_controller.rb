class Api::
  CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      # id = @comment.post_id
      # @post = Post.find(id)
      render json: @comment # need to render back user.fname, etc
    else
      render json: "error"
    end


  end

  def destroy
  end

  def comment_params
    params.require(:comment).permit(:post_id, :text)
  end
end
