class CommunitiesController < ApplicationController
  def index
  end

  def new
    @community = Community.new
  end

  def create
    binding.pry
    @community = Community.new(community_params)
    if @community.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def community_params
    params.require(:community).permit(:name, :category, :profile, user_ids: [])
  end
end
