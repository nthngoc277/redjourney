class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :title
      t.text :description
      t.boolean :private, default: true
      t.string :status

      t.timestamps
    end
  end
end
