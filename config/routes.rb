Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: :create
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :create, :show, :update]
  end
end
