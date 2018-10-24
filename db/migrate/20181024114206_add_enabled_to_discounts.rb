class AddEnabledToDiscounts < ActiveRecord::Migration[5.2]
  def change
    add_column :discounts, :enabled, :boolean, default: true
  end
end
