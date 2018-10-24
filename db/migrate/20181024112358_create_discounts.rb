class CreateDiscounts < ActiveRecord::Migration[5.2]
  def change
    create_table :discounts do |t|
      t.string :name
      t.float :per_cent
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
