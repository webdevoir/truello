import React, { Component } from 'react';
import BoardIndexItem from './board_index_item';
import BoardCreateFormContainer from './board_create_form_container';

class BoardIndex extends Component {
  constructor() {
    super();
    this.sharedBoards = this.sharedBoards.bind(this);
  }
  componentDidMount() {
    this.props.fetchBoards();
  }

  sharedBoards() {
    if (this.props.sharedBoards) {
      return (
        <div>
          <h1><i className="fa fa-users gray-icon"></i>&nbsp;
            Shared Boards</h1>
          <ul className="board-index">
            {
              this.props.sharedBoards.map(board =>
                <BoardIndexItem key={board.id} board={board} />
              )
            }
          </ul>
        </div>
      );
    }
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
        {this.sharedBoards()}
      </div>
    );
  }
}

export default BoardIndex;
