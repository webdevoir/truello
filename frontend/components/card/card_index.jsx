import React from 'react';
import { withRouter } from 'react-router';

const openCard = (router, boardId, cardId) => {
  const url = `/boards/${boardId}/cards/${cardId}`;
  router.push(url);
};

const CardIndex = ({ cards, router }) => {
  const boardId = router.params.boardId;
  return (
  <ul>
    {
      cards.map(card => (
        <li key={card.id} className='card-index-item'
          onClick={() => openCard(router, boardId, card.id)}>
          {card.name}
        </li>
      ))
    }
  </ul>
  );
};

export default withRouter(CardIndex);
