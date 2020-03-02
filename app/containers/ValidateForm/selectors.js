import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the validateForm state domain
 */

const selectValidateFormDomain = state => state.validateForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ValidateForm
 */

const makeSelectValidateForm = () =>
  createSelector(
    selectValidateFormDomain,
    substate => substate,
  );

export default makeSelectValidateForm;
export { selectValidateFormDomain };
