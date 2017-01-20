# Truello

[Truello](http://www.truello.io) is a project and task management
application inspired by Trello. It has a Ruby on Rails backend, a
PostgreSQL database, and React with a Redux framework on the frontend.

## Features & Implementation

### Boards

  The boards are stored in the database with a name, user_id, and date
columns. When a user logs in, a request is made to fetch all of the boards
filtered by those that belong to the current logged in user. The users'
boards are stored in the boards slice of the frontend state until the user
is logged out.
