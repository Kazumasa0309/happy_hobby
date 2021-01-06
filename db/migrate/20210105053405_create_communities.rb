class CreateCommunities < ActiveRecord::Migration[6.0]
  def change
    create_table :communities do |t|
      t.string :name,           null: false
      t.string :category,       null: false
      t.text   :profile,        null: false
      t.timestamps
    end
  end
end
