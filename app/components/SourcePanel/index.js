/**
 *
 * SourcePanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from 'components/Header';
import Button from 'components/Button';
import { FiRefreshCcw } from 'react-icons/fi';
import SourceCard from 'components/SourceCard';

const FormsByDate = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.main};
  width: 300px;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 50px;
  padding-left: 20px;
  #form-header {
    margin-top: 30px;
    color: ${props => props.theme.color.white};
  }
`;

function SourcePanel() {
  return (
    <div style={{ display: 'flex' }}>
      <FormsByDate>
        <Button
          id="form-create"
          accent
          icon={FiRefreshCcw}
          label="Validate"
          onClick={() => {}}
        />
        <Header id="form-header">Cell layout</Header>
        <SourceCard label="Table" />
        <Header id="form-header">Form Components</Header>
        <SourceCard label="Input" />
        <SourceCard label="Checkbox" />
        <SourceCard label="File Uploader" />
        <SourceCard label="Text" />
        <SourceCard label="Divider" />
      </FormsByDate>
    </div>
  );
}

SourcePanel.propTypes = {};

export default SourcePanel;
