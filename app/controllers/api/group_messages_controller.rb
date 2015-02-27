class Api::GroupMessagesController < ApplicationController
  def create
    @group_message = current_user.group_messages.new(group_message_params)

    if @group_message.save
      render :show
    else
      render json "error"
    end

  end

  def destroy
    @group_message = GroupMessage.find(params[:id])
    @group_message.destroy()
    render json: 'deleted'
  end


  def show
    @group_message = GroupMessage.find(params[:id])
    render :show
  end

  def group_message_params
    params.require(:group_message).permit(:group_id, :text)
  end
end
