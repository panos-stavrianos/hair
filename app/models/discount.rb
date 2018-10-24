class Discount < ApplicationRecord
  belongs_to :user

  scope :by_user, ->(current_user) {where(user: current_user).order(name: :desc)}

  def create_with_user(current_user)
    self.user = current_user if user.nil?
    save
  end

  def to_s
    [name, "#{per_cent.round(0)}%"].join(" - ")
  end
end
