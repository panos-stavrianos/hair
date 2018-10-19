class Tile < ApplicationRecord
  belongs_to :user
  scope :by_user, ->(current_user) {where(user: current_user)}

end
