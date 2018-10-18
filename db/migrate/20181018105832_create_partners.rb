class CreatePartners < ActiveRecord::Migration[5.2]
  def change
    create_table :partners do |t|
      t.string :name
      t.string :phone
      t.string :comment
      t.boolean :enabled, default: true
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
