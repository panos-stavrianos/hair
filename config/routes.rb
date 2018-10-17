Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
  resources :dashboard do
    get :autocomplete_product_name, :on => :collection
  end
  post 'dashboard' => 'dashboard#render_product_partial_form'
  delete 'customer_product/:id(.:format)' => 'dashboard#destroy_customer_product', as: 'destroy_customer_product'
  delete 'customer_service/:id(.:format)' => 'dashboard#destroy_customer_service', as: 'destroy_customer_service'

  resources :customers
  resources :services
  resources :products
  resources :expenses

end
