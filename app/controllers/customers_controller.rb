require 'datatables/customers_datatable'
require 'datatables/services_by_customer_datatable'
require 'datatables/products_by_customer_datatable'

class CustomersController < ApplicationController
  require 'ml'

  def index
    @records = Customer.by_user(current_user)
    @customers_datatable = CustomersDatatable.new(user_id: current_user)
  end

  def show
    @record = Customer.by_user(current_user).find(params[:id])
    @services_by_customer_datatable = ServicesByCustomerDatatable.new(user_id: current_user, range: between_where(@range), customer: @record)
    @products_by_customer_datatable = ProductsByCustomerDatatable.new(user_id: current_user, range: between_where(@range), customer: @record)
    tiles
  end

  def between_where(range)
    if not range or range[:start] == ""
      range = {}
      range[:start] = 0
      range[:end] = Time.now.to_i * 1000
      print "between_where none:" + range.to_s
    end

    s = DateTime.strptime((range[:start].to_f / 1000).to_s, '%s')
    e = DateTime.strptime((range[:end].to_f / 1000).to_s, '%s')
    {:created_at => s..e}
  end

  def show_range
    @record = Customer.by_user(current_user).find(params[:id])
    @range = {start: params[:start], end: params[:end], label: params[:label]}
    @services_by_customer_datatable = ServicesByCustomerDatatable.new(user_id: current_user, range: between_where(@range), customer: @record)
    @products_by_customer_datatable = ProductsByCustomerDatatable.new(user_id: current_user, range: between_where(@range), customer: @record)
    tiles
    render partial: 'customers/show_content'
  end

  def create
    @record = Customer.new(customer_params).create_with_user(current_user)
    redirect_to customers_path
  end

  def edit
    @records = Customer.by_user(current_user)
    @record = Customer.by_user(current_user).find(params[:id])
    @customers_datatable = CustomersDatatable.new(user_id: current_user)
  end

  def update
    @record = Customer.by_user(current_user).find(params[:id])
    if @record.update_attributes(customer_params)
      redirect_to customers_path
    else
      render 'edit'
    end
  end

  def destroy
    @record = Customer.by_user(current_user).find(params[:id])
    @record.destroy
    redirect_to customers_path
  end


  def products_services_by_day
    @record = Customer.by_user(current_user).find(params[:id])

    @range = Rack::Utils.parse_nested_query(params[:range]).symbolize_keys
    print @range
    dates = []

    if @range[:label] == "All"
      predictions = predict_next_visits(3)
      if predictions
        predictions = predictions.map { |p| p[:next_visit].to_date }
        start_date = Time.now
        end_date = predictions[-1]
        start_date.to_date.upto(end_date.to_date) do |date|
          if predictions.include? date
            dates.append([date.strftime("%B %d, %Y"), 1])
          else
            dates.append([date.strftime("%B %d, %Y"), 0])
          end
        end
      end
    end
    predictions = {name: "Predict", data: dates}

    response = [
        {name: "Services", data: @record.customer_services.where(between_where(@range)).group_by_day(:created_at, format: "%B %d, %Y").count},
        {name: "Products", data: @record.customer_products.where(between_where(@range)).group_by_day(:created_at, format: "%B %d, %Y").count},
        predictions
    ]
    render json: response
  end

  def customer_params
    params.require(:customer).permit(:name, :phone_1, :phone_2, :sex, :comment, :customer_range)
  end

  def tiles
    f = @record.customer_services.order(:created_at).first.created_at
    l = @record.customer_services.order(:created_at).last.created_at

    months_active = (l.year * 12 + l.month) - (f.year * 12 + f.month)

    visits = @record.customer_services.distinct.count(:created_at)
    av_visits = (visits.to_f / months_active.to_f).round(2)
    profit = (@record.customer_services.sum("price * amount") + @record.customer_services.sum("price * amount")).round(2)
    av_profit = (profit.to_f / months_active.to_f).round(2)
    services = @record.customer_services.count
    av_services = (services.to_f / months_active.to_f).round(2)
    products = @record.customer_products.count
    av_products = (products.to_f / months_active.to_f).round(2)
    predictions = predict_next_visits(0)
    if predictions.nil?
      prediction = {next_visit: "unknown", in_days: "unknown"}
    else
      prediction = predictions[0]
    end
    @tiles = {
        :months_active => months_active,
        :visits => visits,
        :av_visits => av_visits,
        :profit => profit,
        :av_profit => av_profit,
        :services => services,
        :av_services => av_services,
        :products => products,
        :av_products => av_products,
        :next_visit => prediction[:next_visit],
        :in_days => prediction[:in_days]
    }
  end

  def build_model
    model = ML::Regress.new
    visits = @record.customer_services.distinct.order(created_at: :asc).pluck(:created_at)
    if visits.length < 5
      return nil
    end
    y = visits.map do |record, i|
      ((record - visits[0]).to_i / 1.day)
    end
    y = y.uniq
    x = []
    for i in 0..(y.length - 1)
      x.push(i)
    end

    # Load training data
    model.regress(x, y, 2)
    [visits[0], model]
  end

  def predict_next_visits(n)
    (first_visit, model) = build_model
    if first_visit.nil?
      return nil
    end
    predictions = []
    (0..n).each { |i|
      in_days = model.predict_in_future(i).days
      next_visit = first_visit + in_days
      predictions.push({next_visit: first_visit + in_days, in_days: (next_visit - Time.now).to_i / 1.day})
    }
    predictions
  end


end



