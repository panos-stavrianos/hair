# noinspection RailsChecklist01
class DashboardController < ApplicationController

  def index
    @tiles = tiles
    @customers = Customer.by_user(current_user)
    @products = Product.by_user(current_user).where(enabled: true)
    @services = Service.by_user(current_user).where(enabled: true)
    @partners = Partner.by_user(current_user).where(enabled: true)
    @discounts = Discount.by_user(current_user).where(enabled: true)
    @customer_services = CustomerService.eager_load(:customer, :service, :partner, :discount).by_user(current_user)
    @customer_products = CustomerProduct.eager_load(:customer, :product, :partner, :discount).by_user(current_user)
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

  def by_service
    results = CustomerService.by_user_no_order(current_user).eager_load(:service,).group(:name).count
    render json: results
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


end
