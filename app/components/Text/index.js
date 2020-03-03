/**
 *
 * Text
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextDiv = styled.div`
width: 100%;
color: ${props => props.theme.color.black}
font-weight: 14px;
`;

const Text = ({ value }) => <TextDiv>{value}</TextDiv>;

export default Text;
