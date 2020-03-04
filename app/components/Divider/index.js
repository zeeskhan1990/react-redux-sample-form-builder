/**
 *
 * Divider
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = styled.div`
  border-bottom: 1px solid;
  width: 800px;
  border-color: ${props => props.theme.color.gray};
`;

/* function Divider() {
  return <div style={{ border: '1px solid gray' }} />;
}

Divider.propTypes = {}; */

export default Divider;
