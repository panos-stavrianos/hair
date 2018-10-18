# noinspection RailsChecklist01
class DashboardController < ApplicationController

  def index
    @tiles = load_tiles
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


  def load_tiles
    total_customers = Customer.by_user(current_user).count
    this_week_customers = Customer.by_user(current_user).where(created_at: 1.weeks.ago..Time.now).count

    this_week_products = CustomerProduct.by_user(current_user).where(created_at: 1.weeks.ago..Time.now).count
    this_week_products_income = CustomerProduct.by_user(current_user).where(created_at: 1.weeks.ago..Time.now)
                                    .sum('customer_products.price * customer_products.amount')
    last_week_products = CustomerProduct.by_user(current_user).where(created_at: 2.weeks.ago..1.weeks.ago).count
    last_week_products_income = CustomerProduct.by_user(current_user).where(created_at: 2.weeks.ago..1.weeks.ago)
                                    .sum('customer_products.price * customer_products.amount')
    if last_week_products == 0
      last_week_products = 1
    end
    last_week_percent_product = (this_week_products - last_week_products) * 100 / last_week_products

    this_week_services = CustomerService.by_user(current_user).where(created_at: 1.weeks.ago..Time.now).count
    this_week_services_income = CustomerService.by_user(current_user).where(created_at: 1.weeks.ago..Time.now)
                                    .sum('customer_services.price * customer_services.amount')
    last_week_services = CustomerService.by_user(current_user).where(created_at: 2.weeks.ago..1.weeks.ago).count
    last_week_services_income = CustomerService.by_user(current_user).where(created_at: 2.weeks.ago..1.weeks.ago)
                                    .sum('customer_services.price * customer_services.amount')
    if last_week_services == 0
      last_week_services = 1
    end
    last_week_percent_service = (this_week_services - last_week_services) * 100 / last_week_services

    this_week_income = this_week_products_income + this_week_services_income
    last_week_income = last_week_products_income + last_week_services_income
    if last_week_income == 0
      last_week_income = 1
    end
    last_week_percent_income = (this_week_income - last_week_income) * 100 / last_week_income


    this_week_expenses = Expense.by_user(current_user).where(created_at: 1.weeks.ago..Time.now).sum(:price)
    last_week_expenses = Expense.by_user(current_user).where(created_at: 2.weeks.ago..1.weeks.ago).count
    if last_week_expenses == 0
      last_week_expenses = 1
    end
    last_week_percent_expense = (this_week_expenses - last_week_expenses) * 100 / last_week_expenses


    this_week_profit = this_week_income - this_week_expenses
    last_week_profit = last_week_income - last_week_expenses
    if last_week_profit == 0
      last_week_profit = 1
    end
    last_week_percent_profit = (this_week_profit - last_week_profit) * 100 / last_week_profit


    {:total_customers => total_customers, :this_week_customers => this_week_customers,
     :this_week_products => this_week_products, :last_week_percent_product => last_week_percent_product,
     :this_week_services => this_week_services, :last_week_percent_service => last_week_percent_service,
     :this_week_income => this_week_income.round(2), :last_week_percent_income => last_week_percent_income.round(0),
     :this_week_expenses => this_week_expenses.round(2), :last_week_percent_expense => last_week_percent_expense.round(0),
     :this_week_profit => this_week_profit.round(2), :last_week_percent_profit => last_week_percent_profit.round(0)}
  end

  def p_params
    params.permit(:customer_id, :partner_id,
                  {:customer_products => [:product_id, :amount, :price, :comment, :created_at]},
                  {:customer_services => [:service_id, :amount, :price, :comment, :created_at]})
  end

end
