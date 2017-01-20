Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create] do
      get "search", on: :collection
    end
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit] do
      resources :lists, only: :index
      resources :cards, only: :index
      resource :member, only: :create
    end
    resources :lists, only: [:create, :update, :destroy]
    resources :cards, except: [:index, :new, :edit] do
      resources :comments, only: :index
    end
    resources :comments, only: [:create, :destroy]
  end
end
