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
  return {
    type: LOAD_FORMLIST,
  };
}

export function formListLoaded(items) {
  return {
    type: LOAD_FORMLIST_SUCCESS,
    items,
  };
}

export function formListLoadingError(error) {
  return {
    type: LOAD_FORMLIST_SUCCESS,
    error,
  };
}
