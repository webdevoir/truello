import React from 'react';
import CardIndexItem from './card_index_item';
import CardCreateFormContainer from './card_create_form_container';

const CardIndex = ({ cards, router, listId }) => {
  return (
  <ul>
    {
      cards.map(card => (
        <CardIndexItem key={card.id} card={card} />
      ))
    }
    <CardCreateFormContainer listId={listId}  />
  </ul>
  );
};

export default CardIndex;
