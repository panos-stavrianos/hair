# noinspection RailsChecklist01
class DashboardController < ApplicationController

  def index
    @tiles = tiles
    @customers = Customer.by_user(current_user)
    @products = Product.by_user(current_user).where(enabled: true)
    @services = Service.by_user(current_user).where(enabled: true)
    @partners = Partner.by_user(current_user).where(enabled: true)
    @discounts = Discount.by_user(current_user).where(enabled: true)
    @customer_services = CustomerService.eager_load(:customer, :service, :partner).by_user(current_user)
    @customer_products = CustomerProduct.eager_load(:customer, :product).by_user(current_user)
  end

  def render_product_partial_form
    @array_from_controller = CustomerProduct.new
  end

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
            price = Integer(Product.find(record_params[:product_id]).price)
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
            price = Integer(Service.find(record_params[:service_id]).price)
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
    @record = CustomerProduct.find(params[:id]).destroy
    redirect_to dashboard_index_path
  end

  def destroy_customer_service
    @record = CustomerService.find(params[:id]).destroy
    redirect_to dashboard_index_path
  end

  def edit_customer_product
    @customers = Customer.by_user(current_user)
    @products = Product.by_user(current_user).where(enabled: true)
    @services = Service.by_user(current_user).where(enabled: true)
    @partners = Partner.by_user(current_user).where(enabled: true)
    @record = CustomerProduct.find(params[:id])
  end

  def edit_customer_service
    @record = CustomerService.find(params[:id]).destroy
  end

  def update_customer_product
    @record = CustomerProduct.find(params[:id])
    if @record.update_attributes(product_params)
      redirect_to dashboard_index_path
    else
      render 'edit_customer_product'
    end
  end

  def update_customer_service
    @record = CustomerService.find(params[:id])
    if @record.update_attributes(partner_params)
      redirect_to dashboard_index_path
    else
      render 'edit_customer_service'
    end
  end

  def products_services_by_day
    response = [
        {name: "Προϊόντα", data: CustomerProduct.by_user_no_order(current_user).group_by_day(:created_at, format: "%B %d, %Y").count},
        {name: "Υπηρεσίες", data: CustomerService.by_user_no_order(current_user).group_by_day(:created_at, format: "%B %d, %Y").count}
    ]
    render json: response
  end

  def customers_by_sex
    results = Customer.by_user_no_order(current_user).group(:sex).count.transform_keys {|k| k == 'woman' ? "Γυναίκες" : "'Ανδρες"}
    render json: results
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
    record.price = (100 - extra[:discount_per_cent]) * record.price / 100

    if record.amount.blank?
      record.amount = 1
    end
    record.customer_id = extra[:customer_id]
    record.create_with_user(current_user)
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
