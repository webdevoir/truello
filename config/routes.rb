Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: :create
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit] do
      resources :lists, only: :index
      resources :cards, only: :index
    end
    resources :lists, only: [:create, :update, :destroy]
    resources :cards, except: [:index, :new, :edit]
  end
end
