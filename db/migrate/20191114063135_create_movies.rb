class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.text :description
      t.string :runtime
      t.string :director
      t.string :rating

      t.timestamps
    end
  end
end
