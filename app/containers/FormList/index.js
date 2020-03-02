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

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFormList from './selectors';
import reducer from './reducer';
import saga from './saga';

export function FormList() {
  useInjectReducer({ key: 'formList', reducer });
  useInjectSaga({ key: 'formList', saga });

  return (
    <div>
      <Helmet>
        <title>FormList</title>
        <meta name="description" content="Description of FormList" />
      </Helmet>
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
