Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
  resources :dashboard do
    get :autocomplete_product_name, :on => :collection
  end
  post 'dashboard' => 'dashboard#render_product_partial_form'

  resources :customers
  resources :services
  resources :products do
    get :autocomplete_product_name, :on => :collection
  end
end
