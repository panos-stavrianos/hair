class ProductsController < ApplicationController

  def index
    @records = Product.by_user(current_user)
  end

  def create
    Product.new(product_params).create_with_user(current_user)
    redirect_to products_path
  end

  def edit
    @records = Product.by_user(current_user)
    @record = Product.by_user(current_user).find(params[:id])
  end

  def update
    @record = Product.by_user(current_user).find(params[:id])
    if @record.update_attributes(product_params)
      redirect_to products_path
    else
      render 'edit'
    end
  end

  def destroy
    @record = Product.by_user(current_user).find(params[:id])
    @record.destroy
    redirect_to products_path
  end

  def toggle_enabled
    @record = Product.by_user(current_user).find(params[:id])
    @record.toggle!(:enabled)
    redirect_to products_path
  end


  def product_params
    params.require(:product).permit(:name, :description, :enabled, :price)
  end
end
