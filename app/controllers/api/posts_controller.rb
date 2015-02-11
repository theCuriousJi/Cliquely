class Api::PostsController < ApplicationController
  before_action :redirect_if_not_logged_in

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      # groups = "("+current_user.group_ids.join(", ")+ ")"
      # post = Post.find_by_sql(<<-SQL)
      # SELECT p.id, title, url, description, p.created_at, lm.group_id, t.tag_id
      # FROM posts as p
      # JOIN
      # link_memberships as lm ON p.id = lm.post_id
      # JOIN
      # taggings as t ON t.post_id = p.id
      # WHERE p.id = #{@post.id}
      # SQL
      # @post = post
      render :show
      # params[:post][:group_ids].each do |group_id|
      #   LinkMembership.create!({group_id: group_id, post_id: @post.id})
      # end
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    # if params[:title]
      #query for matching posts
    # else
    # @posts = Post.all
    # groups = "("+([0] + current_user.group_ids).join(", ")+ ")"
    # groups = current_user.group_ids
    #
    #
    # posts = Post.includes(:link_memberships)
    #   .includes(:taggings)
    #   .where('link_memberships.group_id IN (?)',  [1,2])
    #   .from('posts')


    @posts = Post.joins(:link_memberships).where('link_memberships.group_id in (?)', current_user.group_ids)
    # posts = Post.find_by_sql(<<-SQL)
    # SELECT p.id, title, url, description, p.created_at, lm.group_id, t.tag_id
    # FROM posts as p
    # JOIN
    # link_memberships as lm ON p.id = lm.post_id
    # JOIN
    # taggings as t ON t.post_id = p.id
    # WHERE lm.group_id IN #{groups}
    # ORDER BY p.created_at DESC
    # SQL
    #
    # @posts = posts
    render :index
  end

  def show
    # groups = "("+current_user.group_ids.join(", ")+ ")"\
    @post = Post.find(params[:id])
    # @post = Post.find_by_sql(<<-SQL)
    # SELECT p.id, title, url, description, p.created_at, lm.group_id, t.tag_id
    # FROM posts as p
    # JOIN
    # link_memberships as lm ON p.id = lm.post_id
    # JOIN
    # taggings as t ON t.post_id = p.id
    # WHERE lm.group_id IN #{groups} AND p.id = #{params[:id]}
    # SQL
    # render json: @post
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
