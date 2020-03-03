/*
 * Button Messages
 *
 * This contains all the text for the Button component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Button';
export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Button component!',
  },
  validate: {
    id: `${scope}.validate`,
    defaultMessage: 'Validate',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Submit',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
});
