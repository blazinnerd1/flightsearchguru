/**
 *
 * FlightResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FlightList from 'components/FlightList';
import FlightFilter from 'containers/FlightFilter';
import {
  makeSelectShouldRenderSearchResults,
  makeSelectFilteredFlights,
} from 'containers/SearchBar2/selectors';

import messages from './messages';
import { makeSelectSearchResults } from '../SearchBar2/selectors';

/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {
  render() {
    const { flights, searchResults } = this.props;
    // flights is the filtered flights
    // searchResults is the unfiltered flights

    console.log('flight results in FlightResults container', flights);
    if (!this.props.shouldDisplayResults) {
      return <div />;
    }

    // if (SEARCH IN PROGRESS){
    //   return(<LoadingIndicator />)
    // }

    if (searchResults === null) {
      console.log('searchResults is null in FlightResults container');
      return <div>Search Error: searchResults === null</div>;
    }

    const flightStops = searchResults.map(
      flight => JSON.parse(flight.stops).length,
    );
    const flightPrices = searchResults.map(flight => flight.price);
    const filterProps = { flightStops, flightPrices };
    return (
      <div>
        {/* <div style={{ position: 'relative', right: '0' }}>
          List Map Calendar
        </div> */}
        <div style={{ display: 'flex' }}>
          <FlightFilter {...filterProps} />
          <FlightList flights={flights} />
        </div>
      </div>
    );
  }
}

FlightResults.propTypes = {
  flights: PropTypes.object,
  searchResults: PropTypes.object,
  shouldDisplayResults: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  shouldDisplayResults: makeSelectShouldRenderSearchResults(),
  flights: makeSelectFilteredFlights(),
  searchResults: makeSelectSearchResults(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(FlightResults);
