class GroupMembershipsController < ApplicationController
  def create
    @group_membership = GroupMembership.new(group_membership_params)

    if @group_membership.save
      render json: @group_membership
    else
      render json: 'error'
    end
  end

  def index
    @group_memberships = GroupMembership.all
    render json: @group_memberships
  end


  def destroy
    @group_membership = GroupMembership.find(params[:id])
    render json: 'deleted'
  end

  def group_membership_params
    params.require(:group_membership).permit(:group_id, :user_id)
  end
end
