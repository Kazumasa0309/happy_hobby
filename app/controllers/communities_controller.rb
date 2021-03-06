class CommunitiesController < ApplicationController
  def index
    @communities = Community.all.order(id: :DESC)
  end

  def new
    @community = Community.new
  end

  def create
    @community = Community.new(community_params)
    if @community.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @community = Community.find(params[:id])
  end

  def destroy
    @community = Community.find(params[:id])
    @community.destroy
    redirect_to root_path
  end

  private

  def community_params
    params.require(:community).permit(:name, :category, :profile, :image, user_ids: [])
  end
end
