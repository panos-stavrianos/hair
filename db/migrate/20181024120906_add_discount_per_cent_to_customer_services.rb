class AddDiscountPerCentToCustomerServices < ActiveRecord::Migration[5.2]
  def change
    add_column :customer_services, :discount_per_cent, :float, default: 0.0
  end
end
