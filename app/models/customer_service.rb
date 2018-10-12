class CustomerService < ApplicationRecord
  belongs_to :customer
  belongs_to :service
  belongs_to :user

  scope :by_user, ->(current_user) {where(user: current_user).order(created_at: :desc)}

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end
end
