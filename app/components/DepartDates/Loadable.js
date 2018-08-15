/**
 *
 * Asynchronously loads the component for DepartingDates
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
