class CreateTiles < ActiveRecord::Migration[5.2]
  def change
    create_view :tiles
  end
end
