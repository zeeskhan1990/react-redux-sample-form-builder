/**
 *
 * Asynchronously loads the component for SourceZone
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
