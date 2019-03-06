# noinspection RailsChecklist01
class ProductsServicesController < ApplicationController

  def create
    customer_id = p_params[:customer_id]
    unless customer_id.nil?
      date = p_params[:created_at]
      partner_id = p_params[:partner_id]
      discount_id = p_params[:discount_id]
      discount_per_cent = p_params[:discount_per_cent]

      if discount_per_cent.blank?
        discount_per_cent = 0
      end
      discount_per_cent = Integer(discount_per_cent)

      unless p_params['customer_products'].nil?
        p_params['customer_products'].each do |record_params|
          unless record_params[:product_id].blank?
            price = Integer(Product.by_user(current_user).find(record_params[:product_id]).price)
            extra_params = {customer_id: customer_id,
                            partner_id: partner_id,
                            date: date,
                            discount_id: discount_id,
                            discount_per_cent: discount_per_cent,
                            price: price}
            save_product_or_service(CustomerProduct.new(record_params), extra_params)
          end
        end
      end
      unless p_params['customer_services'].nil?
        p_params['customer_services'].each do |record_params|
          unless record_params[:service_id].blank?
            price = Integer(Service.by_user(current_user).find(record_params[:service_id]).price)
            extra_params = {customer_id: customer_id,
                            partner_id: partner_id,
                            date: date,
                            discount_id: discount_id,
                            discount_per_cent: discount_per_cent,
                            price: price}
            save_product_or_service(CustomerService.new(record_params), extra_params)
          end
        end
      end
    end
    redirect_to dashboard_index_path
  end


  def destroy_customer_product
    @record = CustomerProduct.by_user(current_user).find(params[:id]).destroy
    redirect_to dashboard_index_path
  end

  def destroy_customer_service
    @record = CustomerService.by_user(current_user).find(params[:id]).destroy
    redirect_to dashboard_index_path
  end

  def edit_customer_product
    @customers = Customer.by_user(current_user)
    @records = Product.by_user(current_user).where(enabled: true)
    @partners = Partner.by_user(current_user).where(enabled: true)
    @discounts = Discount.by_user(current_user).where(enabled: true)
    @record = CustomerProduct.by_user(current_user).find(params[:id])
  end

  def edit_customer_service
    @customers = Customer.by_user(current_user)
    @records = Service.by_user(current_user).where(enabled: true)
    @partners = Partner.by_user(current_user).where(enabled: true)
    @discounts = Discount.by_user(current_user).where(enabled: true)
    @record = CustomerService.by_user(current_user).find(params[:id])
  end

  def update_customer_product
    @record = CustomerProduct.by_user(current_user).find(params[:id])

    if update_product_or_service(@record, product_params, @record.product.price)
      redirect_to dashboard_index_path
    else
      render 'edit_customer_product'
    end
  end

  def update_customer_service
    @record = CustomerService.by_user(current_user).find(params[:id])
    if update_product_or_service(@record, service_params, @record.service.price)
      redirect_to dashboard_index_path
    else
      render 'edit_customer_service'
    end
  end

  def save_product_or_service(record, extra)
    unless extra[:date].blank?
      record.created_at = extra[:date]
    end

    unless extra[:discount_id].blank?
      record.discount_id = extra[:discount_id]
    end

    record.discount_per_cent = extra[:discount_per_cent]

    if record.partner_id.blank?
      record.partner_id = extra[:partner_id]
    end

    if record.price.blank?
      record.price = extra[:price]
    end
    record.price = ((100 - extra[:discount_per_cent]) * record.price / 100).round(2)

    if record.amount.blank?
      record.amount = 1
    end
    record.customer_id = extra[:customer_id]
    record.create_with_user(current_user)
  end

  def update_product_or_service(record, parameters, default_price)
    discount_per_cent = parameters[:discount_per_cent]
    price = parameters[:price]
    discount_per_cent.nil? ? discount_per_cent = 0.0 : discount_per_cent = Float(discount_per_cent)
    price.nil? ? price = default_price : price = Float(price)

    parameters[:discount_per_cent] = discount_per_cent
    parameters[:price] = ((100 - discount_per_cent) * price / 100).round(2)
    record.update_attributes(parameters)
  end

  def p_params
    params.permit(:customer_id, :partner_id, :created_at, :discount_id, :discount_per_cent,
                  {:customer_products => [:product_id, :partner_id, :amount, :price, :comment, :created_at]},
                  {:customer_services => [:service_id, :partner_id, :amount, :price, :comment, :created_at]})
  end

  def product_params
    params.require(:customer_product).permit(:customer_id, :partner_id, :discount_id, :discount_per_cent, :product_id, :amount, :price, :comment, :created_at)
  end

  def service_params
    params.require(:customer_service).permit(:customer_id, :partner_id, :discount_id, :discount_per_cent, :service_id, :amount, :price, :comment, :created_at)
  end
end
