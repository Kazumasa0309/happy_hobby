Rails.application.routes.draw do
  devise_for :users
  get 'communities/index'
  root to: "communities#index"
  resources :communities, only: [:new, :create, :show] do
    resources :messages, only: [:index, :create]
  end
end
