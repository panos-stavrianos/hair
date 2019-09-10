class CustomersController < ApplicationController
  require 'ml'

  def index
    @records = Customer.by_user(current_user)
  end

  def show
    @record = Customer.by_user(current_user).find(params[:id])
    @customer_services = @record.customer_services
    @customer_products = @record.customer_products
    tiles
  end

  def between_where(range)
    if range[:start] == ""
      {}
    else
      s = DateTime.strptime((range[:start].to_f / 1000).to_s, '%s')
      e = DateTime.strptime((range[:end].to_f / 1000).to_s, '%s')
      {:created_at => s..e}
    end

  end

  def show_range
    @record = Customer.by_user(current_user).find(params[:id])
    @range = {start: params[:start], end: params[:end], label: params[:label]}
    @customer_services = @record.customer_services.where(between_where(@range))
    @customer_products = @record.customer_products.where(between_where(@range))
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
    response = [
        {name: "Services", data: @record.customer_services.where(between_where(@range)).group_by_day(:created_at, format: "%B %d, %Y").count},
        {name: "Products", data: @record.customer_products.where(between_where(@range)).group_by_day(:created_at, format: "%B %d, %Y").count}
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
    prediction = predict_next_visit
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

  def predict_next_visit2
    visits = @record.customer_services.distinct.order(created_at: :asc).pluck(:created_at)

    data = visits.each_with_index.map do |record, i|
      {visit: i, day_diff: (record - visits[0]).to_i / 1.day}
    end
    model = Eps::Model.new(data, target: :day_diff, algorithm: :linear_regression)
    actual = data[-1][:day_diff]
    prediction = model.predict(visit: data.length - 1)
    print actual
    print "\n"
    print prediction
    Eps.metrics(actual, prediction)


    print model.summary
    in_days = model.predict(visit: data.length).days
    next_visit = visits[0] + in_days
    {next_visit: visits[0] + in_days, in_days: (next_visit - Time.now).to_i / 1.day}
  end

  def predict_next_visit3
    visits = @record.customer_services.distinct.order(created_at: :asc).pluck(:created_at)
    y = visits.map do |record, i|
      ((record - visits[0]).to_i / 1.day)
    end
    x = []
    for i in 0..(y.length - 1)
      x.push([i])
    end
    print x
    print "\n"
    print y
    print "\n"
    linear_regression = RubyLinearRegression.new
    # Load training data
    linear_regression.load_training_data(x, y)
    # Train the model using the normal equation
    #linear_regression.train_normal_equation
    linear_regression.train_normal_equation

    p = x.map do |x_p|
      predicted = linear_regression.predict(x_p)
      predicted.round
    end
    print p
    print "\n"

    in_days = linear_regression.predict([y.length]).days
    next_visit = visits[0] + in_days
    {next_visit: visits[0] + in_days, in_days: (next_visit - Time.now).to_i / 1.day}
  end

  def predict_next_visit
    model = ML::Regress.new
    visits = @record.customer_services.distinct.order(created_at: :asc).pluck(:created_at)
    if visits.length<5
      return {next_visit: "unknown", in_days: "unknown"}
    end
    y = visits.map do |record, i|
      ((record - visits[0]).to_i / 1.day)
    end
    y = y.uniq
    x = []
    for i in 0..(y.length - 1)
      x.push(i)
    end
    print x
    print "\n"
    print y
    print "\n"
    # Load training data
    model.regress(x, y, 2)

    p = x.map do |x_p|
      predicted = model.predict(x_p)
      predicted.round
    end
    print p
    print "\n"

    in_days = model.predict(y.length).days
    next_visit = visits[0] + in_days
    {next_visit: visits[0] + in_days, in_days: (next_visit - Time.now).to_i / 1.day}
  end


end



