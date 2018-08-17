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
import { makeSelectShouldRenderSearchResults } from 'containers/SearchBar2/selectors';
import { makeSelectFilteredFlights } from 'containers/FlightFilter/selectors';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {
  render() {
    const { flights } = this.props;

    console.log('flight results: ', flights);
    if (!this.props.shouldDisplayResults) {
      return <div />;
    }

    if (!flights.length) {
      return <div>No results LOLOLOL </div>;
    }
    // if (SEARCH IN PROGRESS){
    //   return(<LoadingIndicator />)
    // }

    return (
      <div style={{ display: 'flex' }}>
        <FlightFilter />
        <FlightList flights={flights} />
      </div>
    );
  }
}

FlightResults.propTypes = {
  flights: PropTypes.array,
  shouldDisplayResults: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  shouldDisplayResults: makeSelectShouldRenderSearchResults(),
  flights: makeSelectFilteredFlights(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(FlightResults);
