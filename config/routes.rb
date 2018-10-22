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
  resources :expenses

  resources :services do
    member do
      patch :toggle_enabled
    end
  end

  resources :products do
    member do
      patch :toggle_enabled
    end
  end

  resources :partners do
    member do
      patch :toggle_enabled
    end
  end

  #path for charts
  get 'customer/visits_by_day_services/:id(.:format)' => 'customers#visits_by_day_services', as: "visits_by_day_customer_services"
  get 'customer/visits_by_day_products/:id(.:format)' => 'customers#visits_by_day_products', as: "visits_by_day_customer_products"
end
