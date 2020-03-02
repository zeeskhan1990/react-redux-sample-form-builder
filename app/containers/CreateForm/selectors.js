import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createForm state domain
 */

const selectCreateFormDomain = state => state.createForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateForm
 */

const makeSelectCreateForm = () =>
  createSelector(
    selectCreateFormDomain,
    substate => substate,
  );

export default makeSelectCreateForm;
export { selectCreateFormDomain };
