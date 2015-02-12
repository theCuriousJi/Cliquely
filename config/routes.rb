Rails.application.routes.draw do
  root to: 'static_pages#root'

  resource :session, only: [:create, :new, :destroy]
  resources :users, only: [:new, :create]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show] do
      resources :groups, only: [:index]
      resources :posts, only: [:index]
    end
    resources :posts
    resources :groups
    resources :group_memberships
    resources :link_memberships
    resources :tags
    resources :likes
    resources :comments
  end

end
