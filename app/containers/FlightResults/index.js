/**
 *
 * FlightResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import LoadingIndicator from 'components/LoadingIndicator';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FlightList from 'components/FlightList';
import FlightFilter from 'containers/FlightFilter';
import Map from 'components/MapLeaflet';
import {
  makeSelectShouldRenderSearchResults,
  makeSelectFilteredFlights,
  makeSelectSearchResults,
  makeSelectIsLoading,
  makeSelectHasError,
  makeSelectView,
  makeSelectFilters,
} from 'containers/SearchBar2/selectors';
import { APPLY_NEW_FILTER } from 'containers/SearchBar2/constants';
import { changeView } from 'containers/SearchBar2/actions';
import FlightListGraph from 'components/FlightListGraph';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterByDeparture = this.onFilterByDeparture.bind(this);
    this.onFilterByPrice = this.onFilterByPrice.bind(this);
    this.showView = this.showView.bind(this);
  }
  onFilterByPrice() {
    const { sortBy, ...rest } = this.props.filters.toObject();
    console.log('triggered price');
    this.props.refilter({ sortBy: 'cheapest', ...rest });
  }

  onFilterByDeparture() {
    const { sortBy, ...rest } = this.props.filters.toObject();
    console.log('triggered departure');
    this.props.refilter({ sortBy: 'departure', ...rest });
  }

  showView(view) {
    this.props.updateView(view);
  }

  render() {
    const {
      flights,
      isLoading,
      shouldDisplayResults,
      hasError,
      view,
    } = this.props;

    // flights is the filtered flights
    // searchResults is the unfiltered flights

    if (!shouldDisplayResults) {
      return <div>I should be a landing page</div>;
    }

    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (hasError) {
      return <div>Error! Please try again</div>;
    }

    if (!flights || !flights.length) {
      return <div>No Flights Found</div>;
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
          <button onClick={this.onFilterByPrice}>Price</button>{' '}
          <button onClick={this.onFilterByDeparture}>Departure</button>
        </div>
        <div style={{ position: 'relative', right: '0' }}>
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

FlightResults.propTypes = {
  flights: PropTypes.array,
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
    refilter: newFilterOptions =>
      dispatch({
        type: APPLY_NEW_FILTER,
        newFilterOptions,
      }),
  };
}

const mapStateToProps = createStructuredSelector({
  shouldDisplayResults: makeSelectShouldRenderSearchResults(),
  flights: makeSelectFilteredFlights(),
  searchResults: makeSelectSearchResults(),
  isLoading: makeSelectIsLoading(),
  hasError: makeSelectHasError(),
  filters: makeSelectFilters(),
  view: makeSelectView(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FlightResults);
