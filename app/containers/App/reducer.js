/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_CURRENTFORM_SUCCESS,
  LOAD_CURRENTFORM,
  LOAD_CURRENTFORM_ERROR,
  UPDATE_CURRENTFORM,
  UPDATE_CURRENTFORM_ELEMENT,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  name: '',
  id: undefined,
  details: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CURRENTFORM:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_CURRENTFORM_SUCCESS:
        draft.loading = false;
        draft.name = action.name;
        draft.id = action.id;
        draft.details = action.details;
        break;

      case LOAD_CURRENTFORM_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case UPDATE_CURRENTFORM:
        if (action.updateData.details)
          draft.details = action.updateData.details;
        if (action.updateData.name) draft.name = action.updateData.name;
        if (action.updateData.id) draft.id = action.updateData.id;
        break;

      // using a block to limit the scope of the variable elementIndex to this block
      case UPDATE_CURRENTFORM_ELEMENT: {
        const elementIndex = draft.details.findIndex(
          currentElement => currentElement.id === action.element.id,
        );
        draft.details[elementIndex] = action.element;
      }
    }
  });

export default appReducer;
