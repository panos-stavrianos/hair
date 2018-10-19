class AddPartnerToCustomerServices < ActiveRecord::Migration[5.2]
  def change
    add_reference :customer_services, :partner, index: true
  end
end
