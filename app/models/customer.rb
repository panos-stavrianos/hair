# frozen_string_literal: true

class Customer < ApplicationRecord
  belongs_to :user
  scope :by_user, ->(current_user) {where(user: current_user).order(name: :desc)}
  scope :by_user_no_order, ->(current_user) {where(user: current_user)}

  has_many :customer_products, :dependent => :restrict_with_error
  has_many :products, through: :customer_products, :dependent => :restrict_with_error

  has_many :customer_services, :dependent => :restrict_with_error
  has_many :services, through: :customer_services, :dependent => :restrict_with_error

  enum sex: [:woman, :man]

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end

  def to_s
    "#{name}"
  end

  def sex_to_s
    woman? ? "Γυναίκα" : "'Ανδρας"
  end
end
