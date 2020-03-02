/**
 *
 * Asynchronously loads the component for SourcePanel
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
