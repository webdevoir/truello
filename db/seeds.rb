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

board1 = Board.create!(name: 'Life Goals', owner: demo)
list11 = List.create!(name: 'Personal', board: board1)
Card.create!(name: "Fitness goals", list: list11, list_order: 0,
  description: "Go to the gym 3 times a week. Jog twice a week.",
  due_date: Time.now + 7.days)
Card.create!(name: "Volunteer every month", list: list11, list_order: 1,
  description: "Volunteer at the homeless shelter. Volunteer at the local animal shelter.",
  due_date: Time.now + 1.month)

list12 = List.create!(name: 'Professional', board: board1)
Card.create!(name: "Increase revenue", list: list12, list_order: 0,
  description: "Increase my revenue by 25% in 1 year.",
  due_date: Time.now + 1.year)
Card.create!(name: "Learn to code", list: list12, list_order: 1,
  description: "Learn how to create my own web application.",
  due_date: Time.now + 6.months)

list13 = List.create!(name: 'Ideas', board: board1)
Card.create!(name: "New Year's resolutions", list: list13, list_order: 0,
  description: "Stop eating junk food. Get to work early everyday.",
  due_date: Time.now + 7.days)
Card.create!(name: "Passing thoughts", list: list13, list_order: 1,
  description: "I need a haircut badly!",
  due_date: Time.now)
Card.create!(name: "Potential Halloween costumes", list: list13, list_order: 2,
  description: "Cat, Pirate, Lobster",
  due_date: Time.new(2018, 10, 31))
Card.create!(name: "Questions I need to Google", list: list13, list_order: 3,
  description: "If a tree falls in a forest and no one is around to hear it, does it make a sound?",
  due_date: Time.now + 1.day)

list14 = List.create!(name: 'Done', board: board1)
Card.create!(name: "Watch television", list: list14, list_order: 0,
  description: "No problem!",
  due_date: Time.now)

board2 = Board.create!(name: 'Learn Italian', owner: demo)
list21 = List.create!(name: 'To Do', board: board2)
Card.create!(name: "Radio Broadcasts", list: list21, list_order: 0,
  description: "Find Italian Radio Broadcasts to listen to.",
  due_date: Time.now + 7.days)
Card.create!(name: "Practice with native speakers", list: list21, list_order: 1,
  description: "Sign up to practice speaking with native speakers",
  due_date: Time.now + 1.day)
Card.create!(name: "Study schedule", list: list21, list_order: 2,
  description: "I need to establish a daily study schedule",
  due_date: Time.now + 2.days)
Card.create!(name: "Movies List", list: list21, list_order: 3,
  description: "Make a list of Italian movies to watch.",
  due_date: Time.now + 5.days)

list22 = List.create!(name: 'Doing', board: board2)
Card.create!(name: "Make flashcards", list: list22, list_order: 0,
  description: "Add flash cards on cram.com",
  due_date: Time.now + 1.day)

list23 = List.create!(name: 'Done', board: board2)
Card.create!(name: "Add Browser Plug-in", list: list23, list_order: 0,
  description: "Add language immersion plug-in to my browser.",
  due_date: Time.now)
Card.create!(name: "Dictionary", list: list23, list_order: 1,
  description: "Buy an Italian language dictionary.",
  due_date: Time.now)
Card.create!(name: "Books", list: list23, list_order: 2,
  description: "Find Italian books to read.",
  due_date: Time.now)

board3 = Board.create!(name: 'Vacation Planning', owner: demo)
list31 = List.create!(name: 'To Do Before Trip', board: board3)
Card.create!(name: "Book flight", list: list31, list_order: 0,
  description: "Plan flight arrangements. Find book to read on flight. Reserve aisle seat.",
  due_date: Time.now + 7.days)
Card.create!(name: "Find passports", list: list31, list_order: 1,
  description: "Find passports and check expiration dates!",
  due_date: Time.now + 14.days)
Card.create!(name: "Pack suitcases", list: list31, list_order: 2,
  description: "Don't forget to pack extra garments!",
  due_date: Time.now + 7.days)

list32 = List.create!(name: 'Done', board: board3)
Card.create!(name: "Get travel insurance", list: list32, list_order: 0,
  description: "Purchased traveler's insurance with State Farm",
  due_date: Time.now)
Card.create!(name: "Book Hotel Reservation", list: list32, list_order: 1,
  description: "Booked hotel at The Venetian",
  due_date: Time.now)

list33 = List.create!(name: 'Nature Activities', board: board3)
Card.create!(name: "Helicopter tour", list: list33, list_order: 0,
  description: "Ride on a helicopter tour of the Grand Canyon",
  due_date: Time.now + 1.month)
Card.create!(name: "Cruise", list: list33, list_order: 1,
  description: "Take a Cruise on Lake Mead",
  due_date: Time.now + 1.month + 1.day)
Card.create!(name: "Hiking", list: list33, list_order: 2,
  description: "Hike in the Valley of Fire",
  due_date: Time.now + 1.month + 2.days)
Card.create!(name: "Cycling", list: list33, list_order: 3,
  description: "Cycle around Red Rock Canyon",
  due_date: Time.now + 1.month + 3.days)

list34 = List.create!(name: 'Information', board: board3)
Card.create!(name: "Las Vegas Tourist Info", list: list34, list_order: 0,
  description: "Las Vegas Tourist Information Center: 3150 Paradise Rd, Las Vegas, NV 89109",
  due_date: Time.now + 1.month)

# George

board4 = Board.create!(name: 'Business Travel Prep', owner: george)
list41 = List.create!(name: 'To Do Before Trip', board: board4)
Card.create!(name: "WiFi", list: list41, list_order: 0,
  description: "Check to make sure you have access to WiFi on the plane",
  due_date: Time.now + 7.days)
Card.create!(name: "TSA PreCheck", list: list41, list_order: 1,
  description: "Check that I have TSA PreCheck for this trip",
  due_date: Time.now + 7.days)
Card.create!(name: "Pack", list: list41, list_order: 2,
  description: "Pack carry on and checked luggage.",
  due_date: Time.now + 7.days)

list42 = List.create!(name: 'Packing List', board: board4)
Card.create!(name: "Laptop Charger", list: list42, list_order: 0, due_date: Time.now + 7.days)
Card.create!(name: "Neck Pillow", list: list42, list_order: 1, due_date: Time.now + 7.days)
Card.create!(name: "Phone Charger", list: list42, list_order: 2, due_date: Time.now + 7.days)
Card.create!(name: "Plug Adapter", list: list42, list_order: 3, due_date: Time.now + 7.days)
Card.create!(name: "Passport", list: list42, list_order: 4, due_date: Time.now + 7.days)
Card.create!(name: "Headphones", list: list42, list_order: 5, due_date: Time.now + 7.days)

list43 = List.create!(name: 'Done', board: board4)
Card.create!(name: "Passport", list: list43, list_order: 0,
  description: "Need passport for international trips",
  due_date: Time.now)

list44 = List.create!(name: 'Offline Access To Work Docs', board: board4)
Card.create!(name: "Sync Evernote", list: list44, list_order: 0, due_date: Time.now + 7.days)
Card.create!(name: "Sync Google Docs", list: list44, list_order: 1, due_date: Time.now + 7.days)

Sharing.create!(board: board1, member: george)
Sharing.create!(board: board4, member: demo)


# Vicki

board5 = Board.create!(name: 'Kitchen Project', owner: vicki)
list51 = List.create!(name: 'Ideas', board: board5)
Card.create!(name: "Install pot rack", list: list51, list_order: 0,
  description: "Install a pot rack over the island for easy access.",
  due_date: Time.now + 14.days)
Card.create!(name: "Install sink", list: list51, list_order: 1,
  description: "Need to replace the sink with a more modern sink.",
  due_date: Time.now + 7.days)

list52 = List.create!(name: 'To Do', board: board5)
Card.create!(name: "Remove old fridge and stove", list: list52, list_order: 0,
  description: "Schedule a time for pick up", due_date: Time.now + 2.days)
Card.create!(name: "Install flooring", list: list52, list_order: 1,
  description: "Need to pick wood type, finish, and schedule the installation",
  due_date: Time.now + 5.days)

list53 = List.create!(name: 'In Process', board: board5)
Card.create!(name: "Call contractor", list: list53, list_order: 0,
  description: "Setup an appointment",
  due_date: Time.now + 3.days)
Card.create!(name: "Research appliance brands", list: list53, list_order: 1,
  description: "Frigidaire, Whirlpool, LG",
  due_date: Time.now + 7.days)

list54 = List.create!(name: 'Done', board: board5)
Card.create!(name: "Tile delivery for backsplash", list: list54, list_order: 0,
  description: "Need to be available for the scheduled delivery time",
  due_date: Time.now + 2.days)

Sharing.create!(board: board1, member: vicki)
Sharing.create!(board: board5, member: demo)

comments = ["Awesome Idea!", "Why didn't I think of that!", "So cool!",
  "That's neat!", "Great idea", "Can I steal this?", "What a great idea",
  "That's cool!", "What?!", "I love that!", "This is really nice!",
  "Great!", "Nice", "Awesome!"]

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
