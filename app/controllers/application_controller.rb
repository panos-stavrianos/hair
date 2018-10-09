class ApplicationController < ActionController::Base
  layout :layout_by_resource
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!

  private

  def layout_by_resource
    if not current_user
      'devise'
    else
      'application'
    end
  end

  def configure_permitted_parameters
    attributes = [:email, :username, :password, :password_confirmation, :remember_me, :current_password, :avatar]
    devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
    devise_parameter_sanitizer.permit(:account_update, keys: attributes)

  end

  def user_params
    params.require(:user).permit(:avatar)
  end

end
