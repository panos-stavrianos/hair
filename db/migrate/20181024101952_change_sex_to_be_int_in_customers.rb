class ChangeSexToBeIntInCustomers < ActiveRecord::Migration[5.2]
  def change
    change_column :customers, :sex, :integer
  end
end
