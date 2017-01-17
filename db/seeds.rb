# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = User.create!(username: 'demo_user', password: 'password')

board1 = Board.create!(name: 'Production Workflow', owner: demo)
list11 = List.create!(name: 'In Progress', board: board1)
Card.create!(name: "Challenge interfaces", list: list11)

list12 = List.create!(name: 'Next Up', board: board1)
Card.create!(name: "Homepage animation", list: list12)
Card.create!(name: "Update footers", list: list12)

list13 = List.create!(name: 'Queue', board: board1)
Card.create!(name: "Browser test", list: list13)
Card.create!(name: "Performance testing", list: list13)
Card.create!(name: "Accessibility testing", list: list13)
Card.create!(name: "Styleguides", list: list13)

board2 = Board.create!(name: 'Life Goals', owner: demo)
list21 = List.create!(name: 'Personal', board: board1)
Card.create!(name: "Fitness goals", list: list21)
Card.create!(name: "Volunteer every month", list: list21)

list22 = List.create!(name: 'Professional', board: board1)
Card.create!(name: "Increase revenue", list: list22)
Card.create!(name: "Learn to code", list: list22)

list23 = List.create!(name: 'Ideas', board: board1)
Card.create!(name: "New Years resolutions", list: list23)
Card.create!(name: "Passing thoughts", list: list23)
Card.create!(name: "Potential Halloween costumes", list: list23)
Card.create!(name: "Questions I need to Google", list: list23)

list24 = List.create!(name: 'Done', board: board1)
Card.create!(name: "Watch television", list: list24)

board3 = Board.create!(name: 'Healthy Living', owner: demo)
list31 = List.create!(name: 'To Do', board: board1)
Card.create!(name: "Find recipes", list: list31)
Card.create!(name: "Plan workout schedule", list: list31)

list32 = List.create!(name: 'Done', board: board1)
Card.create!(name: "Research Diets", list: list32)

list33 = List.create!(name: 'Healthy Recipes', board: board1)
Card.create!(name: "Winter Minestrone", list: list33)
Card.create!(name: "Sweet Potato and Egg Breakfast", list: list33)

list34 = List.create!(name: 'Workouts', board: board1)
Card.create!(name: "Full-body Workout", list: list34)
Card.create!(name: "Abs Workout", list: list34)
Card.create!(name: "30-minute Run", list: list34)

board4 = Board.create!(name: 'Vacation Planning', owner: demo)
list41 = List.create!(name: 'To Do Before Trip', board: board4)
Card.create!(name: "Book flight", list: list41)
Card.create!(name: "Find passports", list: list41)
Card.create!(name: "Pack suitcases", list: list41)

list42 = List.create!(name: 'Done', board: board4)
Card.create!(name: "Get travel insurance", list: list42)
Card.create!(name: "Book Hotel Reservation", list: list42)

list43 = List.create!(name: 'Nature Activities', board: board4)
Card.create!(name: "Helicopter tour", list: list43)
Card.create!(name: "Whale watching", list: list43)
Card.create!(name: "Nature Trail", list: list43)
Card.create!(name: "Relax on the beach!", list: list43)
