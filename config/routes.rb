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

  get 'customer_product/:id(.:format)' => 'dashboard#edit_customer_product', as: 'edit_customer_product'
  get 'customer_service/:id(.:format)' => 'dashboard#edit_customer_service', as: 'edit_customer_service'

  patch 'customer_product/:id(.:format)' => 'dashboard#update_customer_product', as: 'update_customer_product'
  patch 'customer_service/:id(.:format)' => 'dashboard#update_customer_service', as: 'update_customer_service'

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

  resources :discounts do
    member do
      patch :toggle_enabled
    end
  end
  #path for charts
  get 'customer/products_services_by_day/:id(.:format)' => 'customers#products_services_by_day', as: "customer_products_services_by_day"
  get 'dashboard_index/products_services_by_day' => 'dashboard#products_services_by_day', as: "dashboard_products_services_by_day", :via => :get
  get 'dashboard_index/customers_by_sex' => 'dashboard#customers_by_sex', as: "dashboard_customers_by_sex", :via => :get
end
