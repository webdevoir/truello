import React from 'react';
import { withRouter } from 'react-router';

const openCard = (router, boardId, cardId) => {
  const url = `/boards/${boardId}/cards/${cardId}`;
  router.push(url);
};

const CardIndexItem = ({router, card}) => {
  const boardId = router.params.boardId;
  return (
    <li key={card.id} className='card-index-item'
      onClick={() => openCard(router, boardId, card.id)}>
      {card.name}
    </li>
  );
};

export default withRouter(CardIndexItem);
