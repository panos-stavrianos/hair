class CreateCustomerServices < ActiveRecord::Migration[5.2]
  def change
    create_table :customer_services do |t|
      t.belongs_to :customer, index: true
      t.belongs_to :service, index: true
      t.belongs_to :user, index: true
      t.integer :amount
      t.float :price
      t.string :comment
      t.timestamps
    end
  end
end
