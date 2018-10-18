# noinspection RailsChecklist01
class DashboardController < ApplicationController

  def index
    @customers = Customer.by_user(current_user)
    @products = Product.by_user(current_user).where(enabled: true)
    @services = Service.by_user(current_user).where(enabled: true)
    @partners = Partner.by_user(current_user).where(enabled: true)
    @customer_services = CustomerService.preload(:customer, :service, :partner).by_user(current_user)
    @customer_products = CustomerProduct.preload(:customer, :product).by_user(current_user)
  end

  def render_product_partial_form
    @array_from_controller = CustomerProduct.new
  end

  def create
    unless p_params[:customer_id].nil?
      unless p_params['customer_products'].nil?
        p_params['customer_products'].each do |record_params|
          unless record_params[:product_id].blank?
            @record = CustomerProduct.new(record_params)
            if @record.price.blank?
              @record.price = Product.find(record_params[:product_id]).price
            end
            @record.customer_id = p_params[:customer_id]
            @record.create_with_user(current_user)
          end
        end
      end
      unless p_params['customer_services'].nil?
        p_params['customer_services'].each do |record_params|
          unless record_params[:service_id].blank?
            @record = CustomerService.new(record_params)
            if @record.price.blank?
              @record.price = Service.find(record_params[:service_id]).price
            end
            @record.partner_id = p_params[:partner_id]
            @record.customer_id = p_params[:customer_id]
            @record.create_with_user(current_user)
          end
        end
      end
    end
    redirect_to dashboard_index_path
  end

  def destroy_customer_product
    @record = CustomerProduct.find(params[:id]).destroy
    redirect_to dashboard_index_path
  end

  def destroy_customer_service
    @record = CustomerService.find(params[:id]).destroy
    redirect_to dashboard_index_path
  end

  def p_params
    params.permit(:customer_id, :partner_id,
                  {:customer_products => [:product_id, :amount, :price, :comment, :created_at]},
                  {:customer_services => [:service_id, :amount, :price, :comment, :created_at]})
  end

end
