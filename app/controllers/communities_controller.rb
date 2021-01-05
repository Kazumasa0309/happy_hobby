class CommunitiesController < ApplicationController
  def index
  end

  def new
    @community = Community.new
  end

  def create
    binding.pry
  end
end
