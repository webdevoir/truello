import React from 'react';
import { Link } from 'react-router';

const BoardIndexItem = ({ board }) => (
  <li className="board-box blue-board-box">
    <Link to={`/boards/${board.id}`}><span>{board.name}</span></Link>
  </li>
);

export default BoardIndexItem;
