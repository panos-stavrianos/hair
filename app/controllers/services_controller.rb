class ServicesController < ApplicationController
  def index
    @records = Service.all
  end

  def create
    Service.new(service_params).save
    redirect_to services_path
  end

  def edit
    @records = Service.all
    @record = Service.find(params[:id])
  end

  def update
    @record = Service.find(params[:id])
    if @record.update_attributes(service_params)
      redirect_to services_path
    else
      render 'edit'
    end
  end

  def destroy
    @record = Service.find(params[:id])
    @record.destroy
    redirect_to services_path
  end

  def service_params
    params.require(:service).permit(:name, :description, :price)
  end
end
