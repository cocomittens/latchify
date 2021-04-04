Rails.application.routes.draw do
  root 'root#root'
  namespace :api, defaults: {format: :json} do\
    resources :users, only: [:show, :new, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :patterns
  end
  
end