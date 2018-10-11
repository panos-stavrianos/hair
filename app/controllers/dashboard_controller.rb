# noinspection RailsChecklist01
class DashboardController < ApplicationController

  def index
    @customers = Customer.by_user(current_user)
    @products = Product.by_user(current_user)
    @services = Service.by_user(current_user)
  end

  def render_product_partial_form
    @array_from_controller = CustomerProduct.new
  end

  def create
    unless p_params[:customer_id].nil?
      print p_params[:customer_id]
      unless p_params['customer_products'].nil?
        p_params['customer_products'].each do |puppy|
          unless puppy[:product_id].blank?
            @record = CustomerProduct.new(puppy[:customer_products])
            @record.customer_id = p_params[:customer_id]
            @record.save
          end
        end
      end
      unless p_params['customer_services'].nil?
        p_params['customer_services'].each do |puppy|
          unless puppy[:service_id].blank?
            @record = CustomerService.new(puppy)
            @record.customer_id = p_params[:customer_id]
            @record.save
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