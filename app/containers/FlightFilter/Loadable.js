/**
 *
 * Asynchronously loads the component for FlightFilter
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
