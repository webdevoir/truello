## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar

**BoardsContainer**
 - BoardsHeader
 - BoardIndex

**BoardIndex**
 - BoardIndexItem
 - BoardForm

**BoardDetailContainer**
 - BoardHeader
 - ListIndex
 - MemberIndex

**ListIndex**
 - ListIndexItem
 - ListForm

**MemberIndex**
 - MemberHeader
 - MemberIndexItem
 - MemberForm

**ListIndexItem**
 - CardIndex

**CardIndex**
 - CardIndexItem
 - CardForm

**CardDetailContainer**
 - CardHeader
 - ChecklistIndex
 - CommentIndex

**ChecklistIndex**
 - ChecklistHeader
 - ChecklistIndexItem

**CommentIndex**
 - CommentHeader
 - CommentIndexItem
 - CommentForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/board/:boardId" | "BoardDetailContainer" |
| "/home/board/:boardId/card/:cardId" | "CardDetailContainer" |
