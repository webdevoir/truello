import React, { Component } from 'react';
import ListIndexItem from './list_index_item';
import ListFormContainer from './list_form_container';

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
        <ListFormContainer formType='new' boardId={boardId} />
      </ul>
    );
  }
}

export default ListIndex;
