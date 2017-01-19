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

ActiveRecord::Schema.define(version: 20170119163126) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.integer  "owner_id",   null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_boards_on_owner_id", using: :btree
  end

  create_table "cards", force: :cascade do |t|
    t.integer  "list_id",                  null: false
    t.string   "name",                     null: false
    t.text     "description", default: "", null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.integer  "list_order",               null: false
    t.index ["list_id", "list_order"], name: "index_cards_on_list_id_and_list_order", unique: true, using: :btree
    t.index ["list_id"], name: "index_cards_on_list_id", using: :btree
  end

  create_table "checklist_items", force: :cascade do |t|
    t.integer  "checklist_id",                 null: false
    t.string   "description",                  null: false
    t.boolean  "done",         default: false, null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["checklist_id"], name: "index_checklist_items_on_checklist_id", using: :btree
  end

  create_table "checklists", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "card_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_checklists_on_card_id", using: :btree
  end

  create_table "lists", force: :cascade do |t|
    t.integer  "board_id",   null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_lists_on_board_id", using: :btree
  end

  create_table "sharings", force: :cascade do |t|
    t.integer  "board_id",   null: false
    t.integer  "member_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id", "member_id"], name: "index_sharings_on_board_id_and_member_id", unique: true, using: :btree
    t.index ["board_id"], name: "index_sharings_on_board_id", using: :btree
    t.index ["member_id"], name: "index_sharings_on_member_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
