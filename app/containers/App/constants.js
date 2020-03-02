/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_CURRENTFORM = 'sample-form-builder/App/LOAD_CURRENTFORM';
export const LOAD_CURRENTFORM_SUCCESS =
  'sample-form-builder/App/LOAD_CURRENTFORM_SUCCESS';
export const LOAD_CURRENTFORM_ERROR =
  'sample-form-builder/App/LOAD_CURRENTFORM_ERROR';
export const UPDATE_CURRENTFORM = 'sample-form-builder/App/UPDATE_CURRENTFORM';
export const UPDATE_CURRENTFORM_ELEMENT =
  'sample-form-builder/App/UPDATE_CURRENTFORM_ELEMENT';
