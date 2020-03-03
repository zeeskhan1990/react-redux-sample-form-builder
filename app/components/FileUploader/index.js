/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaUpload } from 'react-icons/fa';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const UploaderLabel = styled.label`
  padding: 5px;
  border: 1px dashed;
  border-color: ${props => props.theme.color.border};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  background: ${props => props.theme.color.white};
  color: ${props => props.theme.color.black};
  width: 160px;
  height: 40px;
  object-fit: contain;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const FileUploader = ({ onChange }) => (
  <UploaderLabel>
    <input type="file" style={{display:'none'}} onChange={onChange} />
    <FaUpload />
    <span>Choose File</span>
  </UploaderLabel>
);

/* function Button() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Button.propTypes = {}; */

export default FileUploader;
