class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :description
      t.boolean :done, default: false
      t.references :user, index: true

      t.timestamps
    end
  end
end
