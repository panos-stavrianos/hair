class AddDiscountToCustomerServices < ActiveRecord::Migration[5.2]
  def change
    add_reference :customer_services, :discount, index: true
  end
end
