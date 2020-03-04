/**
 *
 * FormList
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FiPlus } from 'react-icons/fi';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled, { css } from 'styled-components';

import Header from 'components/Header';
import Button from 'components/Button';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Text from 'components/Text';
import Divider from 'components/Divider';
import FileUploader from 'components/FileUploader';

import SourceCard from 'components/SourceCard';
import FormElementCardToolbar from 'components/FormElementCardToolbar';
import FormElementCard from 'components/FormElementCard';
import makeSelectFormList from './selectors';
import reducer from './reducer';
import saga from './saga';

const FormsByDate = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.main};
  width: 300px;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 50px;
  #form-create {
    margin-left: 20px;
  }
  #form-header {
    margin-top: 30px;
    margin-left: 20px;
    color: ${props => props.theme.color.white};
  }
`;

const FormsByName = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  width: 300px;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 170px;
`;

const NamedList = styled(Header)`
  margin: 0;
  font-weight: 500;
  font-size: 1.25em;
  width: 100%;
  color: ${props =>
    props.dark ? props.theme.color.black : props.theme.color.white};
`;

const NamedListItem = styled.div`
  height: 40px;
  text-align: left;
  padding-left: 40px;
  display: flex;
  align-items: center;
  ${props => {
    let backgroundStyle = '';
    if (props.selectedDate) {
      backgroundStyle = backgroundStyle.concat(
        `background: rgba(255, 255, 255, 0.1);`,
      );
    }
    if (props.selectedForm) {
      backgroundStyle = backgroundStyle.concat(
        `background: rgba(0, 0, 0, 0.04);`,
      );
    }
    return css`
      ${backgroundStyle}
    `;
  }}
`;

export function FormList() {
  useInjectReducer({ key: 'formList', reducer });
  useInjectSaga({ key: 'formList', saga });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <div>
      <Helmet>
        <title>FormList</title>
        <meta name="description" content="Description of FormList" />
      </Helmet>
      {/* <Header as="h2">Custom Header</Header>
      <Button accent icon={FiPlus} label="Create" onClick={() => {}} />
      <Checkbox checked onChange={() => {}}>
        Testing Checkboxes
      </Checkbox>
      <Input onChange={() => {}} value="MY Testing Input TextArea" />
      <Text value="Sample Text Type" />
      <Divider />
      <FileUploader onChange={() => {}} />
      <SourceCard label="Input" />
      <FormElementCardToolbar />
      <FormElementCard>
        <Input onChange={() => {}} value="Inside Form Element" />
      </FormElementCard> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <FormsByDate>
          <Button
            id="form-create"
            accent
            icon={FiPlus}
            label="Create"
            onClick={() => {}}
          />
          <Header id="form-header">Forms</Header>
          <NamedList as="h3">
            <NamedListItem selectedDate>
              <span>Today</span>
            </NamedListItem>
            <NamedListItem>
              <span>Monday, 21 Oct</span>
            </NamedListItem>
          </NamedList>
        </FormsByDate>
        <FormsByName>
          <NamedList as="h3" dark>
            <NamedListItem selectedForm>
              <span>Form 1</span>
            </NamedListItem>
            <NamedListItem>
              <span>Form 2</span>
            </NamedListItem>
          </NamedList>
        </FormsByName>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  formList: makeSelectFormList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FormList);
