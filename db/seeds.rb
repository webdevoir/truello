# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = User.create!(username: 'Guest', password: 'password')
george = User.create!(username: 'George', password: 'password')
vicki = User.create!(username: 'Vicki', password: 'password')

board1 = Board.create!(name: 'Kitchen Project', owner: demo)
list11 = List.create!(name: 'Ideas', board: board1)
Card.create!(name: "Install pot rack", list: list11, list_order: 0,
  description: "Install a pot rack over the island for easy access.",
  due_date: Time.now + 14.days)
Card.create!(name: "Install sink", list: list11, list_order: 1,
  description: "Need to replace with a modern sink.",
  due_date: Time.now + 7.days)

list12 = List.create!(name: 'To Do', board: board1)
Card.create!(name: "Remove old fridge and stove", list: list12, list_order: 0,
  description: "Schedule a time for pick up", due_date: Time.now + 2.days)
Card.create!(name: "Install flooring", list: list12, list_order: 1,
  description: "Need to pick wood type, finish, and schedule the installation",
  due_date: Time.now + 5.days)

list13 = List.create!(name: 'In Process', board: board1)
Card.create!(name: "Call contractor", list: list13, list_order: 0,
  description: "Setup an appointment",
  due_date: Time.now + 3.days)
Card.create!(name: "Research appliance brands", list: list13, list_order: 1,
  description: "Frigidaire, Whirlpool, LG",
  due_date: Time.now + 7.days)

list14 = List.create!(name: 'Done', board: board1)
Card.create!(name: "Tile delivery for backsplash", list: list14, list_order: 0,
  description: "Need to be available for the scheduled delivery time",
  due_date: Time.now + 2.days)

board2 = Board.create!(name: 'Life Goals', owner: demo)
list21 = List.create!(name: 'Personal', board: board2)
Card.create!(name: "Fitness goals", list: list21, list_order: 0,
  description: "Go to the gym 3 times a week. Jog twice a week.",
  due_date: Time.now + 7.days)
Card.create!(name: "Volunteer every month", list: list21, list_order: 1,
  description: "Volunteer at the homeless shelter. Volunteer at the local animal shelter.",
  due_date: Time.now + 1.month)

list22 = List.create!(name: 'Professional', board: board2)
Card.create!(name: "Increase revenue", list: list22, list_order: 0,
  description: "Increase my revenue by 25% in 1 year.",
  due_date: Time.now + 1.year)
Card.create!(name: "Learn to code", list: list22, list_order: 1,
  description: "Learn how to create my own web application.",
  due_date: Time.now + 6.months)

list23 = List.create!(name: 'Ideas', board: board2)
Card.create!(name: "New Years resolutions", list: list23, list_order: 0,
  description: "Stop eating junk food. Get to work early everyday.",
  due_date: Time.now + 7.days)
Card.create!(name: "Passing thoughts", list: list23, list_order: 1,
  description: "I need a haircut badly!",
  due_date: Time.now)
Card.create!(name: "Potential Halloween costumes", list: list23, list_order: 2,
  description: "Cat, Pirate, Lobster",
  due_date: Time.new(2018, 10, 31))
Card.create!(name: "Questions I need to Google", list: list23, list_order: 3,
  description: "If a tree falls in a forest and no one is around to hear it, does it make a sound?",
  due_date: Time.now + 1.day)

list24 = List.create!(name: 'Done', board: board2)
Card.create!(name: "Watch television", list: list24, list_order: 0,
  description: "No problem!",
  due_date: Time.now)

board3 = Board.create!(name: 'Healthy Living', owner: demo)
list31 = List.create!(name: 'To Do', board: board3)
Card.create!(name: "Find recipes", list: list31, list_order: 0,
  description: "Find lots of vegetarian recipes.",
  due_date: Time.now + 7.days)
Card.create!(name: "Plan workout schedule", list: list31, list_order: 1,
  description: "Jog at the track twice a week. Take swimming lessons every weekend.",
  due_date: Time.now + 14.days)

list32 = List.create!(name: 'Done', board: board3)
Card.create!(name: "Research Diets", list: list32, list_order: 0,
  description: "I need to decide which is the right diet for me",
  due_date: Time.now + 7.days)

board4 = Board.create!(name: 'Vacation Planning', owner: demo)
list41 = List.create!(name: 'To Do Before Trip', board: board4)
Card.create!(name: "Book flight", list: list41, list_order: 0,
  description: "Plan flight arrangements. Find book to read on flight. Reserve aisle seat.",
  due_date: Time.now + 7.days)
Card.create!(name: "Find passports", list: list41, list_order: 1,
  description: "Find passports and check expiration dates!",
  due_date: Time.now + 14.days)
Card.create!(name: "Pack suitcases", list: list41, list_order: 2,
  description: "Don't forget to pack extra garments!",
  due_date: Time.now + 7.days)

list42 = List.create!(name: 'Done', board: board4)
Card.create!(name: "Get travel insurance", list: list42, list_order: 0,
  description: "Purchased traveler's insurance with State Farm",
  due_date: Time.now)
Card.create!(name: "Book Hotel Reservation", list: list42, list_order: 1,
  description: "Booked hotel at The Venetian",
  due_date: Time.now)

list43 = List.create!(name: 'Nature Activities', board: board4)
Card.create!(name: "Helicopter tour", list: list43, list_order: 0,
  description: "Ride on a helicopter tour of the Grand Canyon",
  due_date: Time.now + 1.month)
Card.create!(name: "Cruise", list: list43, list_order: 1,
  description: "Take a Cruise on Lake Mead",
  due_date: Time.now + 1.month + 1.day)
Card.create!(name: "Hiking", list: list43, list_order: 2,
  description: "Hike in the Valley of Fire",
  due_date: Time.now + 1.month + 2.days)
Card.create!(name: "Cycling", list: list43, list_order: 3,
  description: "Cycle around Red Rock Canyon",
  due_date: Time.now + 1.month + 3.days)

list44 = List.create!(name: 'Information', board: board4)
Card.create!(name: "Las Vegas Tourist Info", list: list44, list_order: 0,
  description: "Las Vegas Tourist Information Center: 3150 Paradise Rd, Las Vegas, NV 89109",
  due_date: Time.now + 1.month)

# George

board5 = Board.create!(name: 'Fancy Living', owner: george)
list51 = List.create!(name: 'To Do', board: board5)
Card.create!(name: "Find recipes", list: list51, list_order: 0)
Card.create!(name: "Plan workout schedule", list: list51, list_order: 1)

list52 = List.create!(name: 'Done', board: board5)
Card.create!(name: "Research Diets", list: list52, list_order: 0)

list53 = List.create!(name: 'Healthy Recipes', board: board5)
Card.create!(name: "Winter Minestrone", list: list53, list_order: 0)
Card.create!(name: "Sweet Potato and Egg Breakfast", list: list53,
  list_order: 1)

list54 = List.create!(name: 'Workouts', board: board5)
Card.create!(name: "Full-body Workout", list: list54, list_order: 0)
Card.create!(name: "Abs Workout", list: list54, list_order: 1)
Card.create!(name: "30-minute Run", list: list54, list_order: 2)

Sharing.create!(board: board1, member: george)
Sharing.create!(board: board5, member: demo)

users = [demo, george, vicki]

comments = ["Awesome Idea!", "Why didn't I think of that!", "So cool!",
  "That's neat!", "Great idea", "Can I steal this?", "What a great idea",
  "That's cool!", "What?!"]

card_ids = Card.all.ids

50.times do
  all_board_ids = Board.all.ids
  selected_board_ids = all_board_ids.shuffle.slice(0,
    all_board_ids.count / 4)
  user = User.create!(username: Faker::Name.name, password: 'password')

  (all_board_ids.count / 4).times do
    board_idx = rand(selected_board_ids.count)
    board = Board.find(selected_board_ids[board_idx])
    Sharing.create!(board: board, member: user)
    selected_board_ids.delete_at(board_idx)

    all_card_ids = board.cards.ids
    selected_card_ids = all_card_ids.shuffle.slice(0, all_card_ids.count / 4)
    (all_card_ids.count / 4).times do
      card_idx = rand(selected_card_ids.count)
      card_id = selected_card_ids[card_idx]
      comment = comments.sample
      Comment.create!(card_id: card_id, author: user, text: comment)
      selected_card_ids.delete_at(card_idx)
    end
  end

end
