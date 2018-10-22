class CustomersController < ApplicationController
  def index
    @records = Customer.by_user(current_user)
  end

  def show
    @record = Customer.by_user(current_user).find(params[:id])

  end

  def create
    @record = Customer.new(customer_params).create_with_user(current_user)
    redirect_to customers_path
  end

  def edit
    @records = Customer.by_user(current_user)
    @record = Customer.find(params[:id])
  end

  def update
    @record = Customer.find(params[:id])
    if @record.update_attributes(customer_params)
      redirect_to customers_path
    else
      render 'edit'
    end
  end

  def destroy
    @record = Customer.find(params[:id])
    @record.destroy
    redirect_to customers_path
  end

  def visits_by_day_products
    render json: CustomerService.by_user_no_order(current_user).where(customer: params[:id]).group_by_day(:created_at, format: "%B %d, %Y").count
  end

  def visits_by_day_services

    response = [
        {name: "Products", data: CustomerProduct.by_user_no_order(current_user).where(customer: params[:id]).group_by_day(:created_at, format: "%B %d, %Y").count},
        {name: "Services", data: CustomerService.by_user_no_order(current_user).where(customer: params[:id]).group_by_day(:created_at, format: "%B %d, %Y").count}
    ]
    render json: response
  end

  def customer_params
    params.require(:customer).permit(:name, :phone_1, :phone_2, :sex, :comment)
  end
end
