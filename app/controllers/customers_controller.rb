class CustomersController < ApplicationController
  def index
    @records = Customer.by_user(current_user)
  end

  def create
    @record = Customer.new(customer_params).create_with_user(current_user)
    redirect_to customers_path
  end

  def edit
    @records = Customer.all
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

  def customer_params
    params.require(:customer).permit(:name, :phone_1, :phone_2, :comment)
  end
end
