/* eslint-disable react/prop-types */
/**
 *
 * FormElementCardList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormElementCard from 'components/FormElementCard';

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  clear: both;
  width: 100%;
  align-items: flex-start;
  margin-left: 100px;
`;

function FormElementCardList({ cards, moveCardById, moveCard }) {
  const renderCard = (card, index) => (
    <FormElementCard
      key={card.id}
      index={index}
      id={card.id}
      text={card.text}
      info={card}
      moveCard={moveCard}
      moveCardById={moveCardById}
    />
  );
  return <CardList>{cards.map((card, i) => renderCard(card, i))}</CardList>;
}

export default FormElementCardList;
