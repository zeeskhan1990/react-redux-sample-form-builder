/**
 *
 * Asynchronously loads the component for DropZone
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
