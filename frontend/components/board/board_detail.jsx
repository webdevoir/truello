import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ListIndexContainer from '../list/list_index_container';
import BoardEditFormContainer from './board_edit_form_container';
import BoardMenuContainer from './board_menu_container';
import CardDetailContainer from '../card/card_detail_container';

class BoardDetail extends Component {
  constructor() {
    super();
    this.showBoardMenu = this.showBoardMenu.bind(this);
    this.showBoardHeader = this.showBoardHeader.bind(this);
  }

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

  showBoardMenu() {
    const board = this.props.board;
    if (board && (board.owner_id === this.props.currentUserId)) {
      return <BoardMenuContainer boardId={this.props.params.boardId} />;
    }
  }

  showBoardHeader() {
    const board = this.props.board;
    const currentUserId = this.props.currentUserId;
    if (board && board.owner) {
      if (board.owner_id === currentUserId) {
        return <BoardEditFormContainer boardId={board.id} />;
      }
      return (
        <div className="board-detail-header-container">
          <h1 className='board-shared-header'>{board.name}</h1>
          <h3 className="board-shared-owner">{`by ${board.owner.username}`}</h3>
        </div>
      );
    }
  }

  render() {
    const boardId = this.props.params.boardId;
    return (
      <div className="board-detail-container">
        <div>
          {this.props.children}
          {this.showBoardHeader()}
          <ListIndexContainer boardId={boardId} />
        </div>
        {this.showBoardMenu()}
      </div>
    );
  }
}

export default withRouter(BoardDetail);
