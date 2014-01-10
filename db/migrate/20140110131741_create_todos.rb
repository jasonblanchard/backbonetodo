class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :title
      t.boolean :complete

      t.timestamps
    end
  end
end
