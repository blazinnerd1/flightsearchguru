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
  makeSelectSearchResults,
  makeSelectFilteredFlights,
  makeSelectFilters,
} from './selectors';
import saga from './saga';
import reducer from './reducer';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { changeView } from './actions';
import { CHANGE_FILTER_OPTIONS } from './constants';
import FlightListGraph from 'components/FlightListGraph';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightsToShow: 6,
    };
    this.sortBy = this.sortBy.bind(this);
    this.showView = this.showView.bind(this);
    this.handleShowMoreFlights = this.handleShowMoreFlights.bind(this);
  }

  handleShowMoreFlights(e) {
    e.preventDefault();
    console.log('clicking', e);
    this.setState({ flightsToShow: this.state.flightsToShow + 6 });
  }

  sortBy(criteria) {
    const { sortBy, ...rest } = this.props.filters.toObject();
    this.props.refilter({ sortBy: criteria, ...rest });
  }

  showView(view) {
    this.props.updateView(view);
  }

  render() {
    const { filteredFlights, isLoading, hasError, view } = this.props;

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

    if (!filteredFlights || !filteredFlights.length) {
      return <div>No flights found.</div>;
    }
    let display = (<FlightList 
    handleShowMoreFlights={this.handleShowMoreFlights} 
    totalFlights={filteredFlights.length} 
    flights={filteredFlights.slice(0, this.state.flightsToShow)} 
    />);
    if (view === 'map') {
      display = <Map flights={filteredFlights} />;
    } else if (view === 'graph') {
      display = <FlightListGraph flights={filteredFlights} />;
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
  filteredFlights: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  shouldDisplayResults: PropTypes.bool,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  updateView: PropTypes.func,
  view: PropTypes.string,
  location: PropTypes.object,
  // updateFilter: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    updateView: newView => dispatch(changeView(newView)),
    refilter: newFilterOptions =>
      dispatch({ type: CHANGE_FILTER_OPTIONS, newFilterOptions }),
  };
}

const mapStateToProps = createStructuredSelector({
  filteredFlights: makeSelectFilteredFlights(),
  searchResults: makeSelectSearchResults(),
  isLoading: makeSelectSearchLoading(),
  hasError: makeSelectSearchError(),
  view: makeSelectSearchView(),
  filters: makeSelectFilters(),
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
