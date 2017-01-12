import React, { Component } from 'react';
import BoardIndexItem from './board_index_item';
import BoardFormContainer from './board_form_container';

class BoardIndex extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    return (
      <div className="board-content">
        <h1>My Boards</h1>
        <ul className="board-index">
          {
            this.props.boards.map(board =>
              <BoardIndexItem key={board.id} board={board} />
            )
          }
          <BoardFormContainer />
        </ul>
      </div>
    );
  }
}

export default BoardIndex;
