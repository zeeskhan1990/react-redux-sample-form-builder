/**
 *
 * Asynchronously loads the component for FormList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
