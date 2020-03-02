/*
 *
 * FormList reducer
 *
 */
import produce from 'immer';
import {
  LOAD_FORMLIST,
  LOAD_FORMLIST_SUCCESS,
  LOAD_FORMLIST_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  items: []
};

/* eslint-disable default-case, no-param-reassign */
const formListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FORMLIST:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_FORMLIST_SUCCESS:
        draft.loading = false;
        draft.items = action.items;
        break;
      case LOAD_FORMLIST_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      default:
        break;
    }
  });

export default formListReducer;
