/**
 *
 * ValidateForm
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
import makeSelectValidateForm from './selectors';
import reducer from './reducer';
import saga from './saga';

export function ValidateForm() {
  useInjectReducer({ key: 'validateForm', reducer });
  useInjectSaga({ key: 'validateForm', saga });

  return (
    <div>
      <Helmet>
        <title>ValidateForm</title>
        <meta name="description" content="Description of ValidateForm" />
      </Helmet>
    </div>
  );
}

ValidateForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  validateForm: makeSelectValidateForm(),
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

export default compose(withConnect)(ValidateForm);
