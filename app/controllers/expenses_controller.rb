class ExpensesController < ApplicationController

  def index
    @records = Expense.by_user(current_user)
  end

  def create
    Expense.new(expense_params).create_with_user(current_user)
    redirect_to expenses_path
  end

  def edit
    @records = Expense.by_user(current_user)
    @record = Expense.by_user(current_user).find(params[:id])
  end

  def update
    @record = Expense.by_user(current_user).find(params[:id])
    if @record.update_attributes(expense_params)
      redirect_to expenses_path
    else
      render 'edit'
    end
  end

  def destroy
    @record = Expense.by_user(current_user).find(params[:id])
    @record.destroy
    redirect_to expenses_path
  end

  def expense_params
    params.require(:expense).permit(:name, :price, :created_at)
  end
end

