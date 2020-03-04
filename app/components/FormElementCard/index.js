/**
 *
 * FormElementCard
 *
 */

import React from 'react';
import styled from 'styled-components';
import FormElementCardToolbar from 'components/FormElementCardToolbar';

const StyledCard = styled.div`
  padding: 20px 10px;
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const Toolbar = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
`;

const FormElementCard = ({ children }) => (
  <StyledCard>
    <Toolbar>
      <FormElementCardToolbar />
    </Toolbar>
    {children}
  </StyledCard>
);

export default FormElementCard;
