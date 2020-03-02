/**
 *
 * CreateForm
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
import makeSelectCreateForm from './selectors';
import reducer from './reducer';
import saga from './saga';

export function CreateForm() {
  useInjectReducer({ key: 'createForm', reducer });
  useInjectSaga({ key: 'createForm', saga });

  return (
    <div>
      <Helmet>
        <title>CreateForm</title>
        <meta name="description" content="Description of CreateForm" />
      </Helmet>
    </div>
  );
}

CreateForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createForm: makeSelectCreateForm(),
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

export default compose(withConnect)(CreateForm);
