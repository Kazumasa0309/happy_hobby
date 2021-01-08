class MessagesController < ApplicationController
  def index
    @message = Message.new
    @community = Community.find(params[:community_id])
    @messages = Message.where(community_id: @community.id)
  end

  def create
    @community = Community.find(params[:community_id])
    @message = @community.messages.new(message_params)
    if @message.save
      redirect_to community_messages_path(@community)
    else
      @messages = @community.messages.includes(:user)
      render :index
    end
  end

  private

  def message_params
    params.require(:message).permit(:content).merge(user_id: current_user.id)
  end
end
