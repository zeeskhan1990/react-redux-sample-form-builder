/* eslint-disable react/prop-types */
/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

const CustomHeader = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => (props.color ? props.color : props.theme.black)};
`;

export default CustomHeader;

/* const Header = ({ color, children, type }) => {
  return <CustomHeader as={type}>{children}</CustomHeader>;
};

export default Header;  */
