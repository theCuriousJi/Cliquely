class Api::PostsController < ApplicationController
  before_action :redirect_if_not_logged_in

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show

    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    if params[:title]
      @posts = Post.joins(:link_memberships).where('link_memberships.group_id in (?)', current_user.group_ids)
      .where('posts.title LIKE ?', "%#{params[:title]}%")
      #query for matching posts
    elsif params[:user_id]
      @posts = current_user.liked_posts
    else
      @posts = Post.joins(:link_memberships).where('link_memberships.group_id in (?)', current_user.group_ids)
    end
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy()
    render json: 'deleted'
  end


  def post_params
    params.require(:post).permit(:user_id, :title, :url, :description, tag_ids: [], group_ids: [])
  end

end
