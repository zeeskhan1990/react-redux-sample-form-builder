/**
 *
 * Asynchronously loads the component for SourceCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
