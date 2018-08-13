/**
 *
 * Asynchronously loads the component for SearchBar2
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});