/**
 *
 * FormElementCardToolbar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiMove, FiPlusSquare, FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const StyledToolbar = styled.div`
  width: 140px;
  height: 40px;
  border-radius: 20px;
  border: solid 1px;
  border-color: ${props => props.theme.color.border};
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const FormElementCardToolbar = ({ onMove, onAdd, onEdit, onDelete }) => (
  <StyledToolbar>
    <FiMove size={16} onClick={onMove} />
    <FiPlusSquare size={16} onClick={onAdd} />
    <FiEdit2 size={16} onClick={onEdit} />
    <AiOutlineDelete size={16} onClick={onDelete} />
  </StyledToolbar>
);

export default FormElementCardToolbar;
