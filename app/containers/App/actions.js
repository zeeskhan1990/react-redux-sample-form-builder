/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_CURRENTFORM,
  LOAD_CURRENTFORM_SUCCESS,
  LOAD_CURRENTFORM_ERROR,
  UPDATE_CURRENTFORM,
  UPDATE_CURRENTFORM_ELEMENT,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadCurrentForm(id) {
  return {
    type: LOAD_CURRENTFORM,
    id,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function currentFormLoaded(name, id, details) {
  return {
    type: LOAD_CURRENTFORM_SUCCESS,
    name,
    id,
    details,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function currentFormLoadingError(error) {
  return {
    type: LOAD_CURRENTFORM_ERROR,
    error,
  };
}

export function updateCurrentForm({ name, id, details }) {
  return {
    type: UPDATE_CURRENTFORM,
    updateData: { name, id, details },
  };
}

export function updateCurrentFormElement(element) {
  return {
    type: UPDATE_CURRENTFORM_ELEMENT,
    element,
  };
}
