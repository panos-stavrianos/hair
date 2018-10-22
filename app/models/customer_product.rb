class CustomerProduct < ApplicationRecord
  belongs_to :customer
  belongs_to :product
  belongs_to :user

  scope :by_user, ->(current_user) {includes(:customer, :product).where(user: current_user).order(created_at: :desc)}
  scope :by_user_no_order, ->(current_user) {where(user: current_user)}

  before_save :time_zone_fix

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end

  def price_in_euro
    "#{price}€"
  end


  def price_tooltip
    "προκαθορισμένη τιμή: #{product.price_in_euro}"
  end

  def total_paid
    if amount.blank?
      actual_price
    else
      actual_price * amount
    end
  end

  def total_paid_s
    is_amount_one ? '' : "(Σύνολο: #{total_paid}€)"
  end

  def actual_price
    price.blank? ? product.price : price
  end

  def is_amount_one
    amount.blank? or amount == 1
  end

  def amount_price
    "#{is_amount_one ? '' : (amount.to_s + '#')} #{actual_price}€  #{total_paid_s}"
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


