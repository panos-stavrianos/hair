class Expense < ApplicationRecord
  belongs_to :user

  scope :by_user, ->(current_user) {where(user: current_user).order(name: :desc)}

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end

  def price_in_euro
    "#{price}€"
  end

  def to_s
    [name, price_in_euro].reject(&:blank?).join(" - ")
  end

  def created_at_s
    created_at.strftime("%H:%M  %d/%m/%Y")
  end
end

