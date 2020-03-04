/**
 *
 * FormList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FiPlus } from 'react-icons/fi';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import styled from 'styled-components';

import Header from 'components/Header';
import Button from 'components/Button';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Text from 'components/Text';
import Divider from 'components/Divider';
import FileUploader from 'components/FileUploader';

import makeSelectFormList from './selectors';
import reducer from './reducer';
import saga from './saga';

// const MyText = styled.div`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;

//   /* Color the border and text with theme.main */
//   color: ${props => props.theme.main};
//   border: 2px solid ${props => props.theme.main};
// `;

export function FormList() {
  useInjectReducer({ key: 'formList', reducer });
  useInjectSaga({ key: 'formList', saga });

  return (
    <div>
      <Helmet>
        <title>FormList</title>
        <meta name="description" content="Description of FormList" />
      </Helmet>
      <div>Testing Work</div>
      <Header as="h2">Custom Header</Header>
      <Button accent icon={FiPlus} label="Create" onClick={() => {}} />
      <Checkbox checked onChange={() => {}}>
        Testing Checkboxes
      </Checkbox>
      <Input onChange={() => {}} value="MY Testing Input TextArea" />
      <Text value="Sample Text Type" />
      <Divider />
      <FileUploader onChange={() => {}} />
      {/* <MyText>Testing Work</MyText> */}
    </div>
  );
}

FormList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

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
