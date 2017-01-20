import React, { Component } from 'react';
import { withRouter } from 'react-router';
import BoardMemberIndex from './board_member_index';
import BoardMemberSearchContainer from './board_member_search_container';
import debounce from 'lodash/debounce';

class BoardMenu extends Component {
  constructor(props) {
    super(props);
    this.deleteBoard = this.deleteBoard.bind(this);
  }

  componentDidMount() {
    this.props.fetchMembers(this.props.boardId);
  }

  deleteBoard() {
    this.props.deleteBoard(this.props.boardId)
      .then(() => this.props.router.push('/boards'));
  }

  render() {
    return (
      <div className="board-menu">
        <div className="board-menu-header">
          <h1>Menu</h1>
        </div>
        <button onClick={this.deleteBoard} className='btn red-btn'>
          <i className="fa fa-trash"></i>
          &nbsp;
          Delete Board</button>
        <BoardMemberIndex members={this.props.members}
          deleteMember={this.props.deleteMember}
          boardId={this.props.boardId}
          currentUserId={this.props.currentUserId} />
        <BoardMemberSearchContainer />
      </div>
    );
  }
}

export default withRouter(BoardMenu);
