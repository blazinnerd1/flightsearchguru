/**
 *
 * Asynchronously loads the component for PriceAlert
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
