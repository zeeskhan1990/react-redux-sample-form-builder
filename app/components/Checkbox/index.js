/**
 *
 * Checkbox
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxDiv = styled.div``;
const CheckboxLabel = styled.label`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.color.black};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const CheckboxInput = styled.input`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: solid 1px #d5d5d5;
  margin-right: 10px;
`;

const Checkbox = ({ checked, children, onChange }) => (
  <CheckboxDiv>
    <CheckboxLabel>
      <CheckboxInput checked={!!checked} type="checkbox" onChange={onChange} />
      {children}
    </CheckboxLabel>
  </CheckboxDiv>
);

export default Checkbox;
