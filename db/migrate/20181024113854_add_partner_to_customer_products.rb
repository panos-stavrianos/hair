class AddPartnerToCustomerProducts < ActiveRecord::Migration[5.2]
  def change
    add_reference :customer_products, :partner, index: true
  end
end
