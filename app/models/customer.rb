# frozen_string_literal: true

class Customer < ApplicationRecord
  belongs_to :user
  scope :by_user, ->(current_user) {where(user: current_user).order(name: :desc)}

  has_many :customer_products, :dependent => :restrict_with_error
  has_many :products, through: :customer_products, :dependent => :restrict_with_error

  has_many :customer_services, :dependent => :restrict_with_error
  has_many :services, through: :customer_services, :dependent => :restrict_with_error

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end

  def to_s
    "#{name}"
  end

  def sex_to_s
    sex ? "Γυναίκα" : "'Ανδρας"
  end
end
