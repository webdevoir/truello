import React, { Component } from 'react';

class BoardDetail extends Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  render() {
    return (
      <div>{this.props.boardDetail.name}</div>
    );
  }
}

export default BoardDetail;
