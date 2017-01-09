# Truello

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/TsgVCryN/truello

## Minimum Viable Product

Truello is a project management web application inspired by Trello built
using Ruby on Rails and React/Redux.

### Features
- [ ] New account creation, login, and guest/demo login
- [ ] [Production README](../README.md)
- [ ] Hosting on Heroku
- [ ] Boards
- [ ] Lists & Cards
- [ ] Sharing Boards
- [ ] Comments and Due Dates

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Boards Model, API, and components (2 days, W1 Th 6pm)

**Objective:** Boards can be created, read, and closed/deleted.
Board names can be edited.

### Phase 3: Lists & Cards (3 days, W2 Tu 6pm)

**Objective:** Lists belong to Boards that can be created, read, and deleted.
List names can be edited.

Cards belong to Lists that can be created, read, edited, and deleted.
Cards may contain a name, description, and checklists.
Items from a checklist may be marked as completed.

### Phase 4: Sharing Boards (2 days, W2 Th 6pm)

**Objective:** Boards can be shared with other members/users.
Shared members can view the board and edit cards but cannot change settings or share with other members.

### Phase 5: Comments & Due Dates (1 day, W2 Fr 6pm)

**Objective:** Cards can have comments and a due date.
