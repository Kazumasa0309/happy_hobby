class RequestsController < ApplicationController
  def create
    UsersCommunity.create(users_community_params)
    redirect_to root_path
  end

  private

  def users_community_params
    params.permit(:community_id).merge(user_id: current_user.id)
  end
end
