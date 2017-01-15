import React from 'react';
import { withRouter } from 'react-router';

const BoardMenu = ({ boardId, deleteBoard, router }) => (
  <div className="board-menu">
    <h1>Menu</h1>
    <button onClick={() => deleteBoard(boardId)
        .then(router.push('/boards'))}>Delete Board</button>
  </div>
);

export default withRouter(BoardMenu);
