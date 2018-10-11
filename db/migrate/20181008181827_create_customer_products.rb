class CreateCustomerProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :customer_products do |t|
      t.belongs_to :record, index: true
      t.belongs_to :product, index: true
      t.integer :amount
      t.string :price
      t.string :comment
      t.timestamps
    end
  end
end
