class AddEnabledToServices < ActiveRecord::Migration[5.2]
  def change
    add_column :services, :enabled, :boolean, default: true
  end
end
