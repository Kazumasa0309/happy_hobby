Rails.application.routes.draw do
  get 'communities/index'
  root to: "communities#index"
end
