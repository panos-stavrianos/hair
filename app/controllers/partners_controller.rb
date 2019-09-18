require 'datatables/partners_datatable'

class PartnersController < ApplicationController

  def index
    @records = Partner.by_user(current_user)
    @partners_datatable = PartnersDatatable.new(user_id: current_user)
  end

  def create
    @record = Partner.new(partner_params).create_with_user(current_user)
    redirect_to partners_path
  end

  def edit
    @records = Partner.by_user(current_user)
    @record = Partner.by_user(current_user).find(params[:id])
    @partners_datatable = PartnersDatatable.new(user_id: current_user)
  end

  def update
    @record = Partner.by_user(current_user).find(params[:id])
    if @record.update_attributes(partner_params)
      redirect_to partners_path
    else
      render 'edit'
    end
  end

  def destroy
    @record = Partner.find(params[:id])
    @record.destroy
    redirect_to partners_path
  end

  def toggle_enabled
    @record = Partner.find(params[:id])
    @record.toggle!(:enabled)
    redirect_to partners_path
  end

  def partner_params
    params.require(:partner).permit(:name, :phone, :enabled, :comment)
  end
end
