# noinspection RailsChecklist01
class DashboardController < ApplicationController

  def index
    @customers = Customer.by_user(current_user)
    @products = Product.by_user(current_user)
    @services = Service.by_user(current_user)
    @customer_services = CustomerService.preload(:customer, :service).by_user(current_user)
    @customer_products = CustomerProduct.by_user(current_user)
  end

  def render_product_partial_form
    @array_from_controller = CustomerProduct.new
  end

  def create
    unless p_params[:customer_id].nil?
      print p_params[:customer_id]
      unless p_params['customer_products'].nil?
        p_params['customer_products'].each do |product_params|
          unless product_params[:product_id].blank?
            @record = CustomerProduct.new(product_params)
            @record.customer_id = p_params[:customer_id]
            @record.create_with_user(current_user)
          end
        end
      end
      unless p_params['customer_services'].nil?
        p_params['customer_services'].each do |service_params|
          unless service_params[:service_id].blank?
            @record = CustomerService.new(service_params)
            @record.customer_id = p_params[:customer_id]
            @record.create_with_user(current_user)
          end
        end
      end
    end
    redirect_to dashboard_index_path
  end


  def p_params
    params.permit(:customer_id,
                  {:customer_products => [:product_id, :amount, :price, :comment]},
                  {:customer_services => [:service_id, :amount, :price, :comment]})
  end

end
