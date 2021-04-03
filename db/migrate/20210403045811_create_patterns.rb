class CreatePatterns < ActiveRecord::Migration[6.1]
  def change
    create_table :patterns do |t|
      t.integer :id
      t.string :title
      t.integer :author_id
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
