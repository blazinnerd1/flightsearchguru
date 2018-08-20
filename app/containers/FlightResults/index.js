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
} from 'containers/SearchBar2/selectors';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {
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

    return (
      <div>
        {/* <div style={{ position: 'relative', right: '0' }}>
          List Map Calendar
        </div> */}
        <div style={{ display: 'flex' }}>
          <FlightFilter />
          <FlightList flights={flights} />
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
};

const mapStateToProps = createStructuredSelector({
  shouldDisplayResults: makeSelectShouldRenderSearchResults(),
  flights: makeSelectFilteredFlights(),
  searchResults: makeSelectSearchResults(),
  isLoading: makeSelectIsLoading(),
  hasError: makeSelectHasError(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(FlightResults);
