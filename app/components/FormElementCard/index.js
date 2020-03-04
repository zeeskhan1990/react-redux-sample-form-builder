/* eslint-disable react/prop-types */
/**
 *
 * FormElementCard
 *
 */

import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDrop, useDrag } from 'react-dnd';
import { CARD } from 'utils/constants';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Text from 'components/Text';
import Divider from 'components/Divider';
import FileUploader from 'components/FileUploader';
import FormElementCardToolbar from 'components/FormElementCardToolbar';

// border: 1px solid black;
const StyledCard = styled.div`
  padding: 30px 10px;
  border: 1px solid black;
  min-width: 800px;
  width: fit-content;
  height: fit-content;
  position: relative;
  cursor: move;
  opacity: ${props => props.opacity};
  ${props => {
    let highlightStyle = '';
    if (props.highlightNextDrop === 'up') {
      highlightStyle = highlightStyle.concat(
        `border-top-color: ${props.theme.color.main};
        border-top-width: 3px`,
      );
    } else if (props.highlightNextDrop === 'down') {
      highlightStyle = highlightStyle.concat(
        `border-bottom-color: ${props.theme.color.main};
        border-bottom-width: 3px`,
      );
    } else {
      highlightStyle = highlightStyle.concat(
        `border-color: gray;
        border-width: 1px`,
      );
    }
    return css`
      ${highlightStyle}
    `;
  }}
`;

const Toolbar = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
`;

const getHighlightStatus = (dragIndex, hoverIndex) => {
  if (dragIndex < 0 || dragIndex === hoverIndex) return null;
  if (dragIndex < hoverIndex) return 'down';
  return 'up';
};

const FormElementCard = ({ id, text, index, moveCard, moveCardById, info }) => {
  const [highlightNextDrop, setHighlightNextDrop] = useState(null);

  const getElem = currentInfo => {
    switch (currentInfo.type) {
      case 'text':
        return <Text id={currentInfo.id} value={currentInfo.currentValue} />;
      case 'checkbox':
        return (
          <Checkbox
            id={currentInfo.id}
            checked={!!currentInfo.currentValue}
            onChange={() => {}}
          >
            {currentInfo.text}
          </Checkbox>
        );
      case 'input':
        return (
          <Input
            id={currentInfo.id}
            placeholder={currentInfo.placeholder || ''}
            onChange={() => {}}
            value={currentInfo.currentValue}
          />
        );
      /* case "select":
        const optionList = currentInfo.options.map(currentOption => (
          <option value={currentOption[0]}>{currentOption[1]}</option>
        ));
        return (
          <select id={currentInfo.id} value={currentInfo.value}>
            {optionList}
          </select>
        ); */
      case 'divider':
        return <Divider id={currentInfo.id} />;
      case 'file':
        return <FileUploader id={currentInfo.id} onChange={() => {}} />;
      default:
    }
  };

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: [CARD],
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      // moveCard(dragIndex, hoverIndex);
      setHighlightNextDrop(getHighlightStatus(dragIndex, hoverIndex));

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.

      // item.index = hoverIndex;
    },
    drop: (item, monitor) => {
      console.log('DROP RESULT ----');
      console.log(item);
      return { lastHoverIndex: index, lastHoverId: id };
    },
    collect: monitor => {
      if (monitor.isOver({ shallow: true })) {
        // no -op
      } else {
        // HAVE to actually handle by setting a store object of which index to be
        // highlighted, index set by usual process, current one's set to null only
        // when there's some other taker or when the drop happens.
        // Or actually it maybe better this way because you won't drop on some other
        setHighlightNextDrop(null);
      }
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: CARD, id, index },
    begin: monitor => {},
    end: (item, monitor) => {
      console.log(item);
      console.log(monitor.didDrop());
      console.log('DROP RESULT RECEIVED IN END DRAG');
      const dropResult = monitor.getDropResult();
      console.log(dropResult);
      // console.log()
      debugger;
      if (monitor.didDrop()) {
        // moveCard(item.index, dropResult.lastHoverIndex);
        moveCardById(item.id, dropResult.lastHoverId);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <StyledCard
      ref={ref}
      opacity={opacity}
      highlightNextDrop={highlightNextDrop}
    >
      <Toolbar>
        <FormElementCardToolbar />
      </Toolbar>
      {getElem(info)}
    </StyledCard>
  );
};

export default FormElementCard;
