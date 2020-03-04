/**
 *
 * Button
 *
 */

import React from 'react';
import Button from 'components/Button';
import { FiMove } from 'react-icons/fi';
import styled from 'styled-components';

const StyledCard = styled(Button)`
  border: 1px dashed;
  border-color: ${props => props.theme.color.white};
  cursor: move;
`;

const SourceCard = props => <StyledCard icon={FiMove} {...props} />;

export default SourceCard;
