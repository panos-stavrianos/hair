# frozen_string_literal: true

class Product < ApplicationRecord
  belongs_to :user
  has_many :customer_products, :dependent => :restrict_with_error
  has_many :customers, through: :customer_products, :dependent => :restrict_with_error
  before_save :price_validation

  scope :by_user, ->(current_user) {where(user: current_user).order(name: :desc)}
  scope :by_user_no_order, ->(current_user) {where(user: current_user)}

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
