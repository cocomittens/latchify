class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.integer :id
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :session_token
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
