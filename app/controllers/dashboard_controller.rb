# noinspection RailsChecklist01
class DashboardController < ApplicationController

  def index
    @tiles = tiles
    @customers = Customer.by_user(current_user)
    @products = Product.by_user(current_user).where(enabled: true)
    @services = Service.by_user(current_user).where(enabled: true)
    @partners = Partner.by_user(current_user).where(enabled: true)
    @customer_services = CustomerService.eager_load(:customer, :service, :partner).by_user(current_user)
    @customer_products = CustomerProduct.eager_load(:customer, :product).by_user(current_user)
  end

  def render_product_partial_form
    @array_from_controller = CustomerProduct.new
  end

  def create
    unless p_params[:customer_id].nil?
      date = p_params[:created_at]
      student_discount = p_params[:student_discount]
      discount = p_params[:discount]
      if discount.blank?
        discount = 0
      end
      discount = Integer(discount)

      unless p_params['customer_products'].nil?
        p_params['customer_products'].each do |record_params|
          unless record_params[:product_id].blank?
            @record = CustomerProduct.new(record_params)

            unless date.blank?
              @record.created_at = date
            end

            if @record.price.blank?
              @record.price = Product.find(record_params[:product_id]).price
            end
            @record.price = (100 - discount) * @record.price / 100

            if student_discount == '1'
              @record.comment = "#{@record.comment} ΦΟΙΤΗΤΙΚΗ ΕΚΠΤΩΣΗ #{discount}%"
            end

            if @record.amount.blank?
              @record.amount = 1
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
            unless date.blank?
              @record.created_at = date
            end
            if @record.price.blank?
              @record.price = Service.find(record_params[:service_id]).price
            end
            @record.price = (100 - discount) * @record.price / 100

            if student_discount == '1'
              @record.comment = "#{@record.comment}ΦΟΙΤΗΤΙΚΗ ΕΚΠΤΩΣΗ #{discount}%"
            end

            if @record.amount.blank?
              @record.amount = 1
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

  def tiles
    my_tiles = Tile.by_user(current_user)

    all_customers = my_tiles.find {|x| x[:inent] == 'all_customers'}
    this_week_customers = my_tiles.find {|x| x[:inent] == 'this_week_customers'}
    if all_customers.nil?
      all_customers = Tile.new(count: 0, sum: 0)
    end
    if this_week_customers.nil?
      this_week_customers = Tile.new(count: 0, sum: 0)
    end

    this_week_products = my_tiles.find {|x| x[:inent] == 'this_week_products'}
    last_week_products = my_tiles.find {|x| x[:inent] == 'last_week_products'}
    if this_week_products.nil?
      this_week_products = Tile.new(count: 0, sum: 0)
    end
    if last_week_products.nil?
      last_week_products = Tile.new(count: 1, sum: 0)
    end
    last_week_percent_product = (this_week_products.count - last_week_products.count) * 100 / last_week_products.count

    this_week_services = my_tiles.find {|x| x[:inent] == 'this_week_services'}
    last_week_services = my_tiles.find {|x| x[:inent] == 'last_week_services'}
    if this_week_services.nil?
      this_week_services = Tile.new(count: 0, sum: 0)
    end
    if last_week_services.nil?
      last_week_services = Tile.new(count: 1, sum: 0)
    end
    last_week_percent_service = (this_week_services.count - last_week_services.count) * 100 / last_week_services.count

    this_week_income = this_week_products.sum + this_week_services.sum
    last_week_income = last_week_products.sum + last_week_services.sum
    if last_week_income == 0
      last_week_income = 1
    end
    last_week_percent_income = (this_week_income - last_week_income) * 100 / last_week_income

    this_week_expenses = my_tiles.find {|x| x[:inent] == 'this_week_expenses'}
    last_week_expenses = my_tiles.find {|x| x[:inent] == 'last_week_expenses'}
    if this_week_expenses.nil?
      this_week_expenses = Tile.new(count: 0, sum: 0)
    end
    if last_week_expenses.nil?
      last_week_expenses = Tile.new(count: 1, sum: 1)
    end
    last_week_percent_expense = (this_week_expenses.sum - last_week_expenses.sum) * 100 / last_week_expenses.sum

    this_week_profit = this_week_income - this_week_expenses.sum
    last_week_profit = last_week_income - last_week_expenses.sum
    if last_week_profit == 0
      last_week_profit = 1
    end
    last_week_percent_profit = (this_week_profit - last_week_profit) * 100 / last_week_profit


    {:total_customers => all_customers.count, :this_week_customers => this_week_customers.count,
     :this_week_products => this_week_products.count, :last_week_percent_product => last_week_percent_product,
     :this_week_services => this_week_services.count, :last_week_percent_service => last_week_percent_service,
     :this_week_income => this_week_income.round(2), :last_week_percent_income => last_week_percent_income.round(0),
     :this_week_expenses => this_week_expenses.sum.round(2), :last_week_percent_expense => last_week_percent_expense.round(0),
     :this_week_profit => this_week_profit.round(2), :last_week_percent_profit => last_week_percent_profit.round(0)}
  end

  def p_params
    params.permit(:customer_id, :partner_id, :created_at, :student_discount, :discount,
                  {:customer_products => [:product_id, :amount, :price, :comment, :created_at]},
                  {:customer_services => [:service_id, :amount, :price, :comment, :created_at]})
  end

end
