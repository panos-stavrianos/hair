class Service < ApplicationRecord
  belongs_to :user
  has_many :customer_services, :dependent => :restrict_with_error
  has_many :customers, through: :customer_services, :dependent => :restrict_with_error
  scope :by_user, ->(current_user) { where(user: current_user).order(name: :desc) }
  scope :by_user_no_order, ->(current_user) { where(user: current_user) }
  before_save :price_validation

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

  def price_validation
    if price.blank?
      self.price = 0
    end
  end
end
