class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :description
      t.references :goal, foreign_key: true
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
