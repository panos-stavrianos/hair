class CustomerProduct < ApplicationRecord
  belongs_to :customer
  belongs_to :product
  belongs_to :user

  scope :by_user, ->(current_user) {includes(:customer, :product).where(user: current_user).order(created_at: :desc)}

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end
end


