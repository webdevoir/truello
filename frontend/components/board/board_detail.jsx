import React, { Component } from 'react';
import ListIndexContainer from '../list/list_index_container';
import BoardFormContainer from './board_form_container';

class BoardDetail extends Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  render() {
    return (
      <div className="board-detail-container">
        <div>
          <BoardFormContainer formType="edit"
            boardId={this.props.params.boardId}>
            <h1>{this.props.boardDetail.name}</h1>
          </BoardFormContainer>
        </div>
        <ListIndexContainer />
      </div>
    );
  }
}

export default BoardDetail;
