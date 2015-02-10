class Api::GroupMembershipsController < ApplicationController
  def create
    @group_membership = current_user.memberships.new(group_membership_params)
    if @group_membership.save
      render json: @group_membership
    else
      render json: 'error', status: 422
    end
  end

  def index
    @group_memberships = GroupMembership.all
    render json: @group_memberships
  end


  def destroy
    @group_membership = GroupMembership.find(params[:id])
    @group_membership.destroy!
    render json: @group_membership
  end

  def group_membership_params
    params.require(:group_membership).permit(:group_id)
  end
end
