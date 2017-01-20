# Truello

[Truello][truello] is a task management application inspired by Trello.
Truello allows users to organize there tasks and projects into boards
containing lists and cards. The application has a Ruby on Rails backend,
a PostgreSQL database, and React with a Redux framework on the frontend.

![Truello splash page: http://www.truello.io][splash page]

## Features

- New account creation, login, and guest login
- Boards
- Lists & Cards
- Sharing Boards
- Comments & Due Dates

![guest user's board][board detail]

## Project Design
Truello was designed and built in two weeks.

A project [proposal][proposal] was drafted to provide a manageable
timeline to complete the application.

## Implementation

### New account creation, login, and guest login
Passwords are secured using `BCrypt` to generate a `passord_digest`.
A user `session_token` is stored in the database to keep track of each user
session. When a user successfully logs in, a session token is generated,
stored in the database, and stored on the client-side as a browser cookie.

```ruby
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
  nil
end

def is_password?(password)
  BCrypt::Password.new(password_digest).is_password?(password)
end
```

### Boards

![guest user's board index][board index]

The boards are stored in the database with a `name`, `user_id`, and date
columns. When a user logs in, a request is made to fetch all of the boards
filtered by those that belong to the current logged in user. The user's
boards are stored in the `boards` slice of the frontend state until the user
is logged out. A user can click on a board to view the details of that
specific board.

### Lists & Cards

![guest user's board][board detail]

Each board contains lists and each list contains cards. When a user
clicks into a board to view its details, the board details are
fetched along with the specific lists and cards that are associated
with that board.

Lists are stored in a table with `name`, `board_id`
(a foreign key to the board table), and date columns. The lists data
is stored in the `lists` slice of the frontend state.

Cards are stored in a table with `name`, `list_id`
(a foreign key to the list table), `description`, `due_date` and date
columns. A `list_order` column is also stored to retain the ordering of
the card in its specific list. When a card is added to the list, it sets
the `list_order` by querying for the max order for any card in that list
and increments by one.

```ruby
def self.max_list_order(list_id)
  Card.where(list_id: list_id).maximum(:list_order) || 0
end

def self.next_list_order(list_id)
  Card.max_list_order(list_id) + 1
end

private

def ensure_list_order
  self.list_order ||= Card.next_list_order(list_id)
end
```

The card data for the current board is stored in the `cards` slice of
the frontend state.

When a user clicks on a card, the specific card details are fetched and
are rendered into a React Modal. The user can update there specific card
details including name, description, due date, associated list, and
comments.

![card details][card details]

### Sharing Boards

Boards can be shared between users on the site. A user can share any of
there boards with another user from the board detail page.

![board menu][board menu]

After a board is shared with another user, the user can then view and
access the details of that board from their board index.

![shared boards][shared boards]

The shared user can then comment on the cards on their shared boards as well.

![card comments][card comments]

## Future Directions for the Project

I plan to implement additional features for Truello.

### Board Settings

A Board can have private or public visibility, permissions, and can be
starred.

### Drag Lists & Cards

Lists and cards can be dragged to different locations on the board to
change there ordering.

### Checklists

Cards can have checklists to track the progress towards completion of a card task.

[truello]: http://www.truello.io
[splash page]: ./docs/images/splash_page.png "Truello splash page"
[board detail]: ./docs/images/board_detail.png "Board detail"
[board index]: ./docs/images/board_index.png "Board index"
[card details]: ./docs/images/card_detail.png "Card details"
[board menu]: ./docs/images/board_menu.png "Board menu"
[shared boards]: ./docs/images/shared_boards.png "Shared Boards"
[card comments]: ./docs/images/card_comments.png "Card comments"
[proposal]: ./docs/README.md
