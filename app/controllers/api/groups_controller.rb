class Api::GroupsController < ApplicationController
  before_action :redirect_if_not_logged_in

  def create
    @group = Group.new(group_params)

    if @group.save
      # @group_membership = GroupMembership.new({user_id: current_user.id, group_id: @group.id})
      @group_membership = current_user.memberships.new({group_id: @group.id })
      @group_membership.save!
      render :show
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end


  def index
    if params[:user_id]
      @groups = Group.includes(:memberships).where('groups.id in (?)', current_user.group_ids)
    else
      @groups = Group.includes(:memberships).all
    end
    # render json: @groups
    render :index
  end

  def show
    @group = Group.includes(:members).find(params[:id])
    # , includes(:members)
    render :show
    # if @board.is_member?(current_user)
    #     render :show
    #   else
    #     render json: ["You aren't a member of this board"], status: 403
    #   end
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy()
    render json: 'deleted'
  end

  def group_params
    params.require(:group).permit(:title, :description)
  end

end
