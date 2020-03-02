/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCurrentForm = state => state.currentForm || initialState;

const selectRouter = state => state.router;

const makeSelectName = () =>
  createSelector(
    selectCurrentForm,
    currentFormState => currentFormState.name,
  );

const makeSelectLoading = () =>
  createSelector(
    selectCurrentForm,
    currentFormState => currentFormState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectCurrentForm,
    currentFormState => currentFormState.error,
  );

const makeSelectId = () =>
  createSelector(
    selectCurrentForm,
    currentFormState => currentFormState.id,
  );

const makeSelectDetails = () =>
  createSelector(
    selectCurrentForm,
    currentFormState => currentFormState.details,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectCurrentForm,
  makeSelectName,
  makeSelectLoading,
  makeSelectError,
  makeSelectId,
  makeSelectDetails,
  makeSelectLocation,
};
