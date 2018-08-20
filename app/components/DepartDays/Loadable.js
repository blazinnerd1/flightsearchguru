/**
 *
 * Asynchronously loads the component for DepartDays
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
