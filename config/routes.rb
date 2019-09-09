Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
  resources :dashboard
  post 'dashboard' => 'dashboard#render_product_partial_form'

  resources :products_services

  delete 'customer_product/:id(.:format)' => 'products_services#destroy_customer_product', as: 'destroy_customer_product'
  delete 'customer_service/:id(.:format)' => 'products_services#destroy_customer_service', as: 'destroy_customer_service'

  get 'customer_product/:id(.:format)' => 'products_services#edit_customer_product', as: 'edit_customer_product'
  get 'customer_service/:id(.:format)' => 'products_services#edit_customer_service', as: 'edit_customer_service'

  post 'customer_product/:id(.:format)' => 'products_services#update_customer_product', as: 'update_customer_product'
  post 'customer_service/:id(.:format)' => 'products_services#update_customer_service', as: 'update_customer_service'

  resources :customers
  post 'customers/:id/' => 'customers#show_range', as: 'customer_range'

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
  get 'customer/products_services_by_day/:id/:range(.:format)' => 'customers#products_services_by_day', as: "customer_products_services_by_day"
  get 'dashboard_index/products_services_by_day' => 'dashboard#products_services_by_day', as: "dashboard_products_services_by_day"
  get 'dashboard_index/customers_by_sex' => 'dashboard#customers_by_sex', as: "dashboard_customers_by_sex"
  get 'dashboard_index/by_service' => 'dashboard#by_service', as: "dashboard_by_service"
end
