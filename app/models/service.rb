class Service < ApplicationRecord
  belongs_to :user
  has_many :customer_services
  has_many :customers, through: :customer_services
  scope :by_user, ->(current_user) {where(user: current_user).order(name: :desc)}

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end
end
