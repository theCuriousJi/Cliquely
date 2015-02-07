class Api::PostsController < ApplicationController
  before_action :redirect_if_not_logged_in

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    # fail
    if @post.save
      render json: @post
      # params[:post][:group_ids].each do |group_id|
      #   LinkMembership.create!({group_id: group_id, post_id: @post.id})
      # end
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @posts = Post.all
    groups = "("+current_user.group_ids.join(", ")+ ")"
    posts = Post.find_by_sql(<<-SQL)
    SELECT p.id, title, url, description
    FROM posts as p
    JOIN
    link_memberships as lm ON p.id = lm.post_id
    WHERE lm.group_id IN #{groups}
    SQL
    render json: posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy()
    render json: 'deleted'
  end


  def post_params
    params.require(:post).permit(:user_id, :title, :url, :description, group_ids: [])
  end

end
