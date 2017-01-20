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

### Boards

  The boards are stored in the database with a name, user_id, and date
columns. When a user logs in, a request is made to fetch all of the boards
filtered by those that belong to the current logged in user. The user's
boards are stored in the boards slice of the frontend state until the user
is logged out.

[truello]: http://www.truello.io
[splash page]: ./docs/images/splash_page.png "Truello splash page"
[board detail]: ./docs/images/board_detail.png "A user's board"
[tracks]: ./docs/images/tracks.png "A user's tracks"
[proposal]: ./docs/README.md
