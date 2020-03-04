/* eslint-disable react/prop-types */
/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

export const StyledButton = styled.button`
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  svg {
    margin-left: 10px;
    margin-right: 20px;
  }
  span {
    font-size: ${props => props.size};
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.38px;
  }
`;

/* function Button() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Button.propTypes = {}; */

const Button = props => {
  const { icon, label, size, children, ...styledButtonProps } = props;
  const currentSize = size || 20;
  const Icon = icon;
  return (
    <StyledButton {...styledButtonProps} size={currentSize}>
      {icon ? <Icon size={currentSize} /> : null}
      <span>{label}</span>
      {children}
    </StyledButton>
  );
};

export default Button;
