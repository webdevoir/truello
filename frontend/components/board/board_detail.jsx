import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ListIndexContainer from '../list/list_index_container';
import BoardEditFormContainer from './board_edit_form_container';
import BoardMenuContainer from './board_menu_container';
import CardDetailContainer from '../card/card_detail_container';

class BoardDetail extends Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId)
      .then(
        () =>
          this.props.fetchLists(this.props.params.boardId)
        .then(
          () =>
            this.props.fetchCards(this.props.params.boardId)
        ),
      () => this.props.router.push('/boards'));
  }

  componentWillUnmount() {
    this.props.clearCards();
    this.props.clearLists();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.boardId !== newProps.params.boardId) {
      this.props.fetchBoard(newProps.params.boardId)
        .then(
          () =>
            this.props.fetchLists(newProps.params.boardId)
          .then(
            () =>
              this.props.fetchCards(newProps.params.boardId)
          ));
    }
  }

  render() {
    const boardId = this.props.params.boardId;
    return (
      <div className="board-detail-container">
        <div>
          {this.props.children}
          <BoardEditFormContainer boardId={boardId} />
          <ListIndexContainer boardId={boardId} />
        </div>
        <BoardMenuContainer boardId={boardId} />
      </div>
    );
  }
}

export default withRouter(BoardDetail);
