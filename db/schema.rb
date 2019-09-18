# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_18_212916) do

  create_table "active_storage_attachments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "customer_products", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "customer_id"
    t.bigint "product_id"
    t.bigint "user_id"
    t.integer "amount"
    t.float "price"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "discount_id"
    t.bigint "partner_id"
    t.float "discount_per_cent", default: 0.0
    t.index ["customer_id"], name: "index_customer_products_on_customer_id"
    t.index ["discount_id"], name: "index_customer_products_on_discount_id"
    t.index ["partner_id"], name: "index_customer_products_on_partner_id"
    t.index ["product_id"], name: "index_customer_products_on_product_id"
    t.index ["user_id"], name: "index_customer_products_on_user_id"
  end

  create_table "customer_services", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "customer_id"
    t.bigint "service_id"
    t.bigint "user_id"
    t.integer "amount"
    t.float "price"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "partner_id"
    t.bigint "discount_id"
    t.float "discount_per_cent", default: 0.0
    t.index ["customer_id"], name: "index_customer_services_on_customer_id"
    t.index ["discount_id"], name: "index_customer_services_on_discount_id"
    t.index ["partner_id"], name: "index_customer_services_on_partner_id"
    t.index ["service_id"], name: "index_customer_services_on_service_id"
    t.index ["user_id"], name: "index_customer_services_on_user_id"
  end

  create_table "customers", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "phone_1"
    t.string "phone_2"
    t.string "comment"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sex"
    t.index ["user_id"], name: "index_customers_on_user_id"
  end

  create_table "discounts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.float "per_cent"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "enabled", default: true
    t.index ["user_id"], name: "index_discounts_on_user_id"
  end

  create_table "expenses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_expenses_on_user_id"
  end

  create_table "partners", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "comment"
    t.boolean "enabled", default: true
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_partners_on_user_id"
  end

  create_table "products", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.float "price"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "enabled", default: true
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "services", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.float "price"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "enabled", default: true
    t.index ["user_id"], name: "index_services_on_user_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "username"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.boolean "admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"

  create_view "tiles", sql_definition: <<-SQL
      select 'all_customers' AS `inent`,count(0) AS `count`,0 AS `sum`,`customers`.`user_id` AS `user_id` from `customers` group by `customers`.`user_id` union select 'this_week_customers' AS `inent`,count(0) AS `count`,0 AS `sum`,`customers`.`user_id` AS `user_id` from `customers` where (yearweek(`customers`.`created_at`,0) = yearweek(curdate(),0)) group by `customers`.`user_id` union select 'this_week_products' AS `inent`,count(0) AS `count`,sum((`customer_products`.`price` * `customer_products`.`amount`)) AS `sum`,`customer_products`.`user_id` AS `user_id` from `customer_products` where (yearweek(`customer_products`.`created_at`,0) = yearweek(curdate(),0)) group by `customer_products`.`user_id` union select 'last_week_products' AS `inent`,count(0) AS `count`,sum((`customer_products`.`price` * `customer_products`.`amount`)) AS `sum`,`customer_products`.`user_id` AS `user_id` from `customer_products` where (yearweek(`customer_products`.`created_at`,0) = yearweek((curdate() - 7),0)) group by `customer_products`.`user_id` union select 'this_week_services' AS `inent`,count(0) AS `count`,sum((`customer_services`.`price` * `customer_services`.`amount`)) AS `sum`,`customer_services`.`user_id` AS `user_id` from `customer_services` where (yearweek(`customer_services`.`created_at`,0) = yearweek(curdate(),0)) group by `customer_services`.`user_id` union select 'last_week_services' AS `inent`,count(0) AS `count`,sum((`customer_services`.`price` * `customer_services`.`amount`)) AS `sum`,`customer_services`.`user_id` AS `user_id` from `customer_services` where (yearweek(`customer_services`.`created_at`,0) = yearweek((curdate() - 7),0)) group by `customer_services`.`user_id` union select 'this_week_expenses' AS `inent`,count(0) AS `count`,sum(`expenses`.`price`) AS `sum`,`expenses`.`user_id` AS `user_id` from `expenses` where (yearweek(`expenses`.`created_at`,0) = yearweek(curdate(),0)) group by `expenses`.`user_id` union select 'last_week_expenses' AS `inent`,count(0) AS `count`,sum(`expenses`.`price`) AS `sum`,`expenses`.`user_id` AS `user_id` from `expenses` where (yearweek(`expenses`.`created_at`,0) = yearweek((curdate() - 7),0)) group by `expenses`.`user_id`
  SQL
end
