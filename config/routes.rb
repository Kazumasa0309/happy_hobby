Rails.application.routes.draw do
  get 'hobbies/index'
  devise_for :users
  get 'communities/index'
  root to: "communities#index"
  resources :hobbies, only: [:index]
  resources :communities, only: [:new, :create, :show, :destroy] do
    resources :messages, only: [:index, :create]
    resources :requests, only: [:create]
  end
end
