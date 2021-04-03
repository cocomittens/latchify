class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
