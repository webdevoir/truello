import React from 'react';
import ListIndexItem from './list_index_item';

const ListIndex = ({ lists }) => (
  <ul className="list-index">
    {
      lists.map(list =>
        <ListIndexItem list={list} key={list.id} />
      )
    }
  </ul>
);

export default ListIndex;
