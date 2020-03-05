/*
 *
 * FormList actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_FORMLIST,
  LOAD_FORMLIST_ERROR,
  LOAD_FORMLIST_SUCCESS,
} from './constants';

export function loadFormList() {
  debugger
  return {
    type: LOAD_FORMLIST,
  };
}

export function formListLoaded(items) {
  debugger
  return {
    type: LOAD_FORMLIST_SUCCESS,
    items,
  };
}

export function formListLoadingError(error) {
  debugger
  return {
    type: LOAD_FORMLIST_SUCCESS,
    error,
  };
}
