/* eslint-disable react/prop-types */
/**
 *
 * DropZone
 *
 */

import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import FormElementCardList from 'components/FormElementCardList';
import { GiSaveArrow } from 'react-icons/gi';
import Button from 'components/Button';
import { CARD } from 'utils/constants';

const SaveBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const DropBlock = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor};
  align-self: center;
`;

const MainBlock = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex: 1 0 0;
`;

export function DropZone({ cards, moveCard, moveCardById }) {
  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: CARD,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop /* && !greedy */) {
        return;
      }
      setHasDropped(true);
      setHasDroppedOnChild(didDrop);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });
  // const text = greedy ? 'greedy' : 'not greedy'
  let backgroundColor = 'white';
  if (isOverCurrent /* || (isOver && greedy) */) {
    backgroundColor = 'darkgreen';
  }
  return (
    <MainBlock>
      <DropBlock ref={drop} backgroundColor={backgroundColor}>
        <FormElementCardList
          cards={cards}
          moveCard={moveCard}
          moveCardById={moveCardById}
        />
      </DropBlock>
      <br />
      {hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>}
      <SaveBlock>
        <Button accent icon={GiSaveArrow} label="Save" onClick={() => {}} />
      </SaveBlock>
    </MainBlock>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(DropZone);
