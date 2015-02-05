class Api::GroupsController < ApplicationController
  def create

    @group = Group.new(group_params)

    if @group.save
      # @group_membership = GroupMembership.new({user_id: current_user.id, group_id: @group.id})
      # @group_membership.save
      render json: @group
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end


  def index
    @groups = Group.all
    render json: @groups
  end

  def show
    @group = Group.find(params[:id])
    render json: @group
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
