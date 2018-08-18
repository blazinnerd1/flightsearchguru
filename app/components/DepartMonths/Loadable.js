/**
 *
 * Asynchronously loads the component for DepartWeeks
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
