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
import {
  makeSelectShouldRenderSearchResults,
  makeSelectFilteredFlights,
  makeSelectSearchResults,
  makeSelectIsLoading,
  makeSelectHasError,
  makeSelectView,
  makeSelectFilters,
} from 'containers/SearchBar2/selectors';
import { changeView, updateFilterOptions } from 'containers/SearchBar2/actions';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterByDeparture = this.onFilterByDeparture.bind(this);
    this.onFilterByPrice = this.onFilterByPrice.bind(this);
    this.onShowGraph = this.onShowGraph.bind(this);
    this.onShowList = this.onShowList.bind(this);
  }
  onFilterByPrice() {
    const { sortBy, ...rest } = this.props.filters;
    this.props.updateFilter({ sortBy: 'cheapest', ...rest });
  }

  onFilterByDeparture() {
    const { sortBy, ...rest } = this.props.filters;
    this.props.updateFilter({ sortBy: 'departure', ...rest });
  }

  onShowList() {
    this.props.updateView('list');
  }

  onShowGraph() {
    this.props.updateView('graph');
  }

  render() {
    const { flights, isLoading, shouldDisplayResults, hasError } = this.props;

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
    if (this.props.view === 'graph') {
      display = <div>I'm a graph lolol</div>;
    }

    return (
      <div>
        <div style={{ position: 'relative', left: '0' }}>
          <button onClick={this.onFilterByPrice}>Price</button>{' '}
          <button onClick={this.onFilterByDeparture}>Departure</button>
        </div>
        <div style={{ position: 'relative', right: '0' }}>
          <button onClick={this.onShowList}>List</button> <button>Map</button>{' '}
          <button onClick={this.onShowGraph}>Graph</button>
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
  updateView: PropTypes.funct,
};

export function mapDispatchToProps(dispatch) {
  return {
    updateView: newView => dispatch(changeView(newView)),
    updateFilter: newFilterOptions =>
      dispatch(updateFilterOptions(newFilterOptions)),
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
