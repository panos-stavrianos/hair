class Expense < ApplicationRecord
  belongs_to :user

  scope :by_user, ->(current_user) { where(user: current_user).order(name: :desc) }
  scope :by_user_no_order, ->(current_user) { where(user: current_user) }

  before_save :price_validation, :time_zone_fix

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

  def price_validation
    if price.blank?
      self.price = 0
    end
  end

  def created_at_s
    timezone = Timezone['Europe/Athens']
    timezone.utc_to_local(created_at).strftime("%H:%M  %d/%m/%Y")
  end

  def time_zone_fix
    unless created_at.blank?
      timezone = Timezone['Europe/Athens']
      self.created_at = timezone.local_to_utc(created_at)
    end
  end

end

