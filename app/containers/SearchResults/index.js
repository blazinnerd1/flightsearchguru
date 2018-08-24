/**
 *
 * FlightResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import LoadingIndicator from 'components/LoadingIndicator';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FlightList from 'components/FlightList';
import SplashPage from 'containers/SplashPage';
import FlightFilter from 'containers/FlightFilter';
import Map from 'components/MapLeaflet';
import {
  makeSelectSearchLoading,
  makeSelectSearchView,
  makeSelectSearchError,
} from './selectors';
import { changeFilterOptions } from 'containers/FlightFilter/actions';
import { makeSelectFilteredFlights } from 'containers/FlightFilter/selectors';
import { changeView } from './actions';
import FlightListGraph from 'components/FlightListGraph';

// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
    this.showView = this.showView.bind(this);
  }

  sortBy(criteria) {
    const { sortBy, ...rest } = this.props.filters.toObject();
    this.props.refilter({ sortBy: criteria, ...rest });
  }

  showView(view) {
    this.props.updateView(view);
  }

  render() {
    const { flights, isLoading, hasError, view } = this.props;

    // flights is the filtered flights
    // searchResults is the unfiltered flights
    if (true) {
      return <SplashPage />;
    }

    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (hasError) {
      return <div>Error! Please try again.</div>;
    }

    if (!flights || !flights.length) {
      return <div>No flights found.</div>;
    }

    let display = <FlightList flights={flights} />;
    if (view === 'map') {
      display = <Map flights={flights} />;
    } else if (view === 'graph') {
      display = <FlightListGraph flights={flights} />;
    }

    return (
      <div>
        <div style={{ position: 'relative', left: '0' }}>
          Sort:
          <button onClick={() => this.sortBy('cheapest')}>Price</button>{' '}
          <button onClick={() => this.sortBy('departure')}>
            Earliest Departure
          </button>
        </div>
        <div style={{ position: 'relative', right: '0' }}>
          View:
          <button onClick={() => this.showView('list')}>List</button>
          <button onClick={() => this.showView('map')}>Map</button>{' '}
          <button onClick={() => this.showView('graph')}>Graph</button>
        </div>
        <div style={{ display: 'flex' }}>
          <FlightFilter />
          {display}
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  flights: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  shouldDisplayResults: PropTypes.bool,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  updateView: PropTypes.func,
  view: PropTypes.string,
  // updateFilter: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    updateView: newView => dispatch(changeView(newView)),
    refilter: newFilterOptions => changeFilterOptions(newFilterOptions),
  };
}

const mapStateToProps = createStructuredSelector({
  flights: makeSelectFilteredFlights(),
  isLoading: makeSelectSearchLoading(),
  hasError: makeSelectSearchError(),
  view: makeSelectSearchView(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchResults);
