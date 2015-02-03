Rails.application.routes.draw do
  root to: 'static_pages#root'

  resource :session, only: [:create, :new, :destroy]
  resources :users, only: [:new, :create]

end
