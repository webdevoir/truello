import React from 'react';
import { withRouter } from 'react-router';

const BoardMenu = ({ boardId, deleteBoard, router }) => (
  <div className="board-menu">
    <div className="board-menu-header">
      <h1>Menu</h1>
    </div>
    <button onClick={() => deleteBoard(boardId)
        .then(router.push('/boards'))}><i className="fa fa-trash"></i>
      &nbsp;
      Delete Board</button>
  </div>
);

export default withRouter(BoardMenu);
