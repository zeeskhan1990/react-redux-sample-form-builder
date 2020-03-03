/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const CustomButton = styled.button`
  padding: 5px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  background: ${props => props.theme.color.main};
  color: ${props => props.theme.color.white};
  width: 240px;
  height: 48px;
  border-radius: 24px;
  ${props => {
    let styleProps = '';
    if (props.accent) {
      styleProps = styleProps.concat(
        `background: ${props.theme.color.white}; color: ${
          props.theme.color.main
        };`,
      );
    }
    if (props.disabled) {
      styleProps = styleProps.concat(
        `background: ${props.theme.color.border}; color: ${
          props.theme.color.white
        };`,
      );
    }
    if (props.small) {
      styleProps = styleProps.concat(
        `width: 100px;
        height: 40px;
        object-fit: contain;
        border-radius: 4px;
         `,
      );
    }
    return css`
      ${styleProps}
    `;
  }}
`;

function Button() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Button.propTypes = {};

export default CustomButton;
