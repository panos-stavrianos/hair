class AddDiscountPerCentToCustomerProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :customer_products, :discount_per_cent, :float, default: 0.0
  end
end
