class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :name
      t.string :description
      t.string :price
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
