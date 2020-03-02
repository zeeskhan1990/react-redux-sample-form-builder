/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_FORMLIST } from 'containers/FormList/constants';
import {
  formListLoaded,
  formListLoadingError,
} from 'containers/FormList/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getFormList() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const items = yield call(request, requestURL);
    yield put(formListLoaded(items));
  } catch (err) {
    yield put(formListLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* allForms() {
  // Watches for LOAD_FORMLIST actions and calls getFormList when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_FORMLIST, getFormList);
}
