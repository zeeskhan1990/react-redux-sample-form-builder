/* eslint-disable react/prop-types */
/**
 *
 * Icon
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomIcon = styled.div`
  margin: ${props => props.margin || '10px'};
`;

function Icon(props) {
  const { children, ...otherProps } = props;
  return (
    <CustomIcon className="custom-icon" {...otherProps}>
      {children}
    </CustomIcon>
  );
}

export default Icon;
