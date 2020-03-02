import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the formList state domain
 */

const selectFormListDomain = state => state.formList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FormList
 */

const makeSelectFormList = () =>
  createSelector(
    selectFormListDomain,
    substate => substate,
  );

export default makeSelectFormList;
export { selectFormListDomain };
