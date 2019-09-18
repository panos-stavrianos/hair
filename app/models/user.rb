class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  has_many :customer

  has_one_attached :avatar

  def current_user
    super
  end

end