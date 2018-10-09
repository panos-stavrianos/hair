class ProductsController < ApplicationController
  def index
    @records = Product.all
  end

  def create
    Product.new(product_params).save
    redirect_to products_path
  end

  def edit
    @records = Product.all
    @record = Product.find(params[:id])
  end

  def update
    @record = Product.find(params[:id])
    if @record.update_attributes(product_params)
      redirect_to products_path
    else
      render 'edit'
    end
  end

  def destroy
    @record = Product.find(params[:id])
    @record.destroy
    redirect_to products_path
  end

  def product_params
    params.require(:product).permit(:name, :description, :price)
  end
end
