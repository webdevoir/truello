import React, { Component } from 'react';
import ListIndexContainer from '../list/list_index_container';
import BoardFormContainer from './board_form_container';
import BoardMenuContainer from './board_menu_container';

class BoardDetail extends Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  render() {
    const boardId = this.props.params.boardId;
    return (
      <div className="board-detail-container">
        <div>
          <BoardFormContainer formType="edit"
            boardId={boardId}>
            <h1 className='board-detail-header'>{this.props.board.name}</h1>
          </BoardFormContainer>
        <ListIndexContainer boardId={boardId} />
        </div>
        <BoardMenuContainer boardId={boardId} />
      </div>
    );
  }
}

export default BoardDetail;
