import React, { Component } from 'react';
import ListIndexItem from './list_index_item';
import ListCreateFormContainer from './list_create_form_container';

class ListIndex extends Component {
  render() {
    const boardId = this.props.boardId;
    return (
      <ul className="list-index">
        {
          this.props.lists.map(list =>
            <ListIndexItem list={list} key={list.id} boardId={boardId} />
          )
        }
        <ListCreateFormContainer boardId={boardId} />
      </ul>
    );
  }
}

export default ListIndex;
