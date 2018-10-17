class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :name
      t.float :price
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
