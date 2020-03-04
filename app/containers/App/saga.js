/* eslint-disable prettier/prettier */
/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CURRENTFORM } from 'containers/App/constants';
import {
  currentFormLoaded,
  currentFormLoadingError,
} from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getCurrentForm(action) {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  if(action.id) {
    const mockUrl = 'https://jsonplaceholder.typicode.com/todos/1'      
    const requestURL = mockUrl;
    try {
    // Call our request helper (see 'utils/request')
      const fetchedForm = yield call(request, requestURL);
      yield put(currentFormLoaded(fetchedForm.name, fetchedForm.id, fetchedForm.details));
    } catch (err) {
      yield put(currentFormLoadingError(err));
    }
  } else {
    // For the new form scenario when no id is passed
    yield put(currentFormLoaded("New Form", new Date(Date.now()).getUTCMilliseconds(), []));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* allForms() {
  // Watches for LOAD_CURRENTFORM actions and calls getCurrentForm when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  console.log("SAGE VISITED TILL HERE")
  yield takeLatest(LOAD_CURRENTFORM, getCurrentForm);
}
