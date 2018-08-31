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
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import FlightListGraph from 'components/FlightListGraph';
import { CHANGE_FILTER_OPTIONS } from './constants';
import {
  makeSelectSearchLoading,
  makeSelectSearchError,
  makeSelectSearchResults,
  makeSelectFilteredFlights,
  makeSelectFilters,
  makeSelectSearchView,
} from './selectors';
import saga from './saga';
import reducer from './reducer';
// import { Link } from 'react-router-dom';
// import messages from './messages';

const MAX_GRAPH_SIZE = 7;

/* eslint-disable react/prefer-stateless-function */
export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightsToShow: 6,
    };
    this.sortBy = this.sortBy.bind(this);
    this.handleShowMoreFlights = this.handleShowMoreFlights.bind(this);
  }

  handleShowMoreFlights(e) {
    e.preventDefault();
    this.setState({ flightsToShow: this.state.flightsToShow + 6 });
  }

  sortBy(criteria) {
    const { sortBy, ...rest } = this.props.filters.toObject();
    this.props.refilter({ sortBy: criteria, ...rest });
  }

  render() {
    const {
      filteredFlights,
      isLoading,
      hasError,
      view,
      searchResults,
    } = this.props;

    // Used to determine whether or not the graph should be displayed
    const destinationIDs = new Set();
    if (filteredFlights) {
      filteredFlights.forEach(flight => destinationIDs.add(flight.to_id));
    }

    // flights is the filtered flights
    // searchResults is the unfiltered flights
    if (this.props.location.pathname !== '/search') {
      return <SplashPage />;
    }

    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (hasError) {
      return <div>Error! Please try again.</div>;
    }

    if (!searchResults || !searchResults.length) {
      return <div>No flights found for your search</div>;
    }
    if (!filteredFlights || !filteredFlights.length) {
      return (
        <div>
          <FlightFilter />
          No flights match your filters
        </div>
      );
    }
    let display = (
      <FlightList
        handleShowMoreFlights={this.handleShowMoreFlights}
        totalFlights={filteredFlights.length}
        flights={filteredFlights.slice(0, this.state.flightsToShow)}
      />
    );

    if (view === 'map') {
      display = (
        <div style={{ display:'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Map flights={filteredFlights} />
        </div>
      );
    } else if (view === 'graph' && destinationIDs.size > MAX_GRAPH_SIZE) {
      display = `Reduce the number of destinations in your search to ${MAX_GRAPH_SIZE} or fewer to view the price graph `;
    } else if (view === 'graph' && destinationIDs.size <= MAX_GRAPH_SIZE) {
      display = <FlightListGraph flights={filteredFlights} />;
    }

    return (
      <div>
        <FlightFilter />
        {display}
      </div>
    );
  }
}

SearchResults.propTypes = {
  filteredFlights: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // shouldDisplayResults: PropTypes.bool,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  // updateView: PropTypes.func,
  view: PropTypes.string,
  location: PropTypes.object,
  // updateFilter: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    refilter: newFilterOptions =>
      dispatch({ type: CHANGE_FILTER_OPTIONS, newFilterOptions }),
  };
}

const mapStateToProps = createStructuredSelector({
  filteredFlights: makeSelectFilteredFlights(),
  searchResults: makeSelectSearchResults(),
  isLoading: makeSelectSearchLoading(),
  hasError: makeSelectSearchError(),
  filters: makeSelectFilters(),
  view: makeSelectSearchView(),
});

const withSaga = injectSaga({ key: 'searchResults', saga });
const withReducer = injectReducer({ key: 'searchResults', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withConnect,
  withReducer,
)(SearchResults);
