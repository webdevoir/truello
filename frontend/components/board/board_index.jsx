import React, { Component } from 'react';
import BoardIndexItem from './board_index_item';
import BoardCreateFormContainer from './board_create_form_container';

class BoardIndex extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    return (
      <div className="board-content">
        <h1><i className="fa fa-user gray-icon"></i>&nbsp;
          My Boards</h1>
        <ul className="board-index">
          {
            this.props.boards.map(board =>
              <BoardIndexItem key={board.id} board={board} />
            )
          }
          <BoardCreateFormContainer />
        </ul>
      </div>
    );
  }
}

export default BoardIndex;
