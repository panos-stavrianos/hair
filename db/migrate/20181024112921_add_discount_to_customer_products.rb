class AddDiscountToCustomerProducts < ActiveRecord::Migration[5.2]
  def change
    add_reference :customer_products, :discount, index: true
  end
end
