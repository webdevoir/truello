# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = User.create!(username: 'demo_user', password: 'password')
board1 = Board.create!(name: 'Phoenix Project', owner: demo)
board2 = Board.create!(name: 'My Project Plans', owner: demo)
board3 = Board.create!(name: 'Career Goals', owner: demo)
board4 = Board.create!(name: 'Product Features', owner: demo)

list1 = List.create!(name: 'Initial Plans', board: board1)
list2 = List.create!(name: 'Review', board: board1)
list3 = List.create!(name: 'Initial Plans', board: board1)
list4 = List.create!(name: 'Review', board: board1)

card1 = Card.create!(name: "My first card",
                     description: "This is my very first card",
                     list: list1)
