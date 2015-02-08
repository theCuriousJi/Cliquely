Rails.application.routes.draw do
  root to: 'static_pages#root'

  resource :session, only: [:create, :new, :destroy]
  resources :users, only: [:new, :create]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]
    resources :posts
    resources :groups
    resources :group_memberships
    resources :link_memberships
    resources :tags
  end

end
