```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  notes: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      author_id: 1,
      notebook_id: 1
      tags: {
        1: {
          id: 1
          name: "Coding"
        }
      }
    }
  },
  boards: {
    1: {
      id: 1,
      name: "Board Name",
      owner_id: 1
    },
    2: {
      id: 2,
      name: "Awesome Board",
      owner_id: 3
    }
  },
  boardDetail: {
    id: 1,
    name: "Board Name",
    owner_id: 1,
    lists: [
      {
        id: 1,
        name: "List Name",
        cards: [
          {
            id: 1,
            name: "Card Name"
          },
          {
            id: 2,
            name: "Card Name 2"
          }
        ]
      },
      {
        id: 2,
        name: "List Name 2",
        cards: [
          {
            id: 3,
            name: "Card Name 3"
          }
        ]
      }
    ]
  },
  cardDetail: {
    id: 1,
    name: "Card Name",
    description: "This is my first card.",
    due_date: "2017-01-08 19:56:03",
    comments: [
      {
        id: 1,
        text: "This is my comment."
      },
      {
        id: 2,
        text: "This is an additional comment."
      }
    ],
    checklists: [
      {
        id: 1,
        description: "Walk to park",
        done: true
      },
      {
        id: 2,
        description: "Wash car",
        done: false
      },
      {
        id: 3,
        description: "Take shower",
        done: false
      }
    ]
  }
}
```
