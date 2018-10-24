class DiscountsController < ApplicationController
  def index
    @records = Discount.by_user(current_user)
  end

  def create
    @record = Discount.new(discount_params).create_with_user(current_user)
    redirect_to discounts_path
  end

  def edit
    @records = Discount.by_user(current_user)
    @record = Discount.by_user(current_user).find(params[:id])
  end

  def update
    @record = Discount.by_user(current_user).find(params[:id])
    if @record.update_attributes(discount_params)
      redirect_to discounts_path
    else
      render 'edit'
    end
  end

  def destroy
    @record = Discount.by_user(current_user).find(params[:id])
    @record.destroy
    redirect_to discounts_path
  end

  def toggle_enabled
    @record = Discount.by_user(current_user).find(params[:id])
    @record.toggle!(:enabled)
    redirect_to discounts_path
  end

  def discount_params
    params.require(:discount).permit(:name, :per_cent, :enabled)
  end
end
