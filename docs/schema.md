# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
name        | string    | not null
closed      | boolean   | not null, default: false

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed
name        | string    | not null

## cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
list_id     | integer   | not null, foreign key (references lists), indexed
name        | string    | not null
description | text      |
due_date    | timestamp |

## sharings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed
member_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
card_id     | integer   | not null, foreign key (references cards), indexed
author_id   | integer   | not null, foreign key (references users), indexed
text        | text      | not null

## checklists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
card_id     | integer   | not null, foreign key (references cards), indexed

## checklist_items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
checklist_id| integer   | not null, foreign key (references checklists), indexed
description | string    | not null
completed   | boolean   | not null, default: false
