Rails.application.routes.draw do
  get 'api/Sessions'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:new, :create, :update]
    resources :patterns
  end
end