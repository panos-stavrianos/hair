class Service < ApplicationRecord
  belongs_to :user
  has_many :customer_services, :dependent => :restrict_with_error
  has_many :customers, through: :customer_services, :dependent => :restrict_with_error
  scope :by_user, ->(current_user) {where(user: current_user).order(name: :desc)}

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end

  def price_in_euro
    "#{price}€"
  end

  def to_s
    [name, description, price_in_euro].reject(&:blank?).join(" - ")
  end

  def to_s_name_description
    [name, description].reject(&:blank?).join(" - ")
  end
end
