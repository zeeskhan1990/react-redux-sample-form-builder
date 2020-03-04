/* eslint-disable no-plusplus */
/**
 *
 * CreateForm
 *
 */

import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import produce from 'immer';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SourcePanel from 'components/SourcePanel';
import { DropZone } from 'containers/DropZone';
import makeSelectCreateForm from './selectors';
import reducer from './reducer';
import saga from './saga';

export function CreateForm() {
  useInjectReducer({ key: 'createForm', reducer });
  useInjectSaga({ key: 'createForm', saga });

  const [cards, setCards] = useState([
    {
      // new Date(Date.now()).getUTCMilliseconds()
      id: 11,
      text: 'Write a cool JS library - Yo',
      type: 'text',
      placeholder: 'Testing input',
      initialValue: '',
      currentValue: 'Simple Text',
    },
    {
      id: 22,
      text: 'Make it generic enough',
      type: 'input',
      placeholder: 'Testing input',
      initialValue: '',
      currentValue: 'Update Val',
    },
    {
      id: 33,
      text: 'Make it generic enough',
      type: 'checkbox',
      initialValue: false,
      currentValue: true,
    },
    /* {
      id: 44,
      text: "Write README",
      type: "select",
      options: [[1, "one"], [2, "two"], [3, "three"]],
      initialValue: 0,
      currentValue: 2
    }, */
    {
      id: 4,
      type: 'divider',
    },
    {
      id: 5,
      type: 'file',
      initialValue: '',
      currentValue: 'Current file Name',
      fileUrl: '',
    },
  ]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      console.log(' $$$$$ ');
      console.log(dragIndex, hoverIndex);
      // const dragCard = cards[dragIndex];
      const updatedCards = produce(cards, draft => {
        if (hoverIndex >= draft.length) {
          let k = hoverIndex - draft.length + 1;
          while (k--) {
            draft.push(undefined);
          }
        }
        draft.splice(hoverIndex, 0, draft.splice(dragIndex, 1)[0]);
      });
      setCards(updatedCards);
      /* setCards(
        update(cards, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        }),
      ); */
    },
    [cards],
  );

  const moveCardById = useCallback(
    (moverId, placerId) => {
      console.log(' $$$$$ ');
      const moverIndex = cards.findIndex(
        currentCard => currentCard.id === moverId,
      );
      const placerIndex = cards.findIndex(
        currentCard => currentCard.id === placerId,
      );
      console.log(moverIndex, placerIndex);
      moveCard(moverIndex, placerIndex);
      /* const dragCard = cards[moverIndex];
      setCards(
        update(cards, {
          $splice: [[moverIndex, 1], [placerIndex, 0, dragCard]],
        }),
      ); */
    },
    [cards],
  );

  return (
    <div>
      <Helmet>
        <title>CreateForm</title>
        <meta name="description" content="Description of CreateForm" />
      </Helmet>
      <DndProvider backend={Backend}>
        <div style={{ display: 'flex'}}>
          <SourcePanel />
          <DropZone
            cards={cards}
            moveCard={moveCard}
            moveCardById={moveCardById}
          />
        </div>
      </DndProvider>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  createForm: makeSelectCreateForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CreateForm);
