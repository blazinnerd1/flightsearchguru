/**
 *
 * FlightFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectFlightResults } from '../SearchBar2/selectors';

import injectReducer from 'utils/injectReducer';
import makeSelectFlightFilter from './selectors';
import reducer from './reducer';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dirty: false, // if a filter has been changed but not saved the filter is dirty
      filterByPrice: false,
      priceLow: 0,
      priceHigh: 0,
      sortBy: 'cheapest', // can be cheapest or date
    };
  }
  render() {
    return (
      <div style={{ width: '50px' }}>
        <div>Filter by destionations</div>
        <div>filter by # of stops</div>
        <div>filter by price</div>
        <div>Filter by travel time</div>
        <div>Filter by departure time</div>
        <div>Filter by arrival time</div>
        <div>Filter by price (cool component)</div>
        <div>sort by cheapest or date </div>
        GO
      </div>
    );
  }
}

FlightFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  flightfilter: makeSelectFlightFilter(),
  searchResults: makeSelectFlightResults(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'flightFilter', reducer });

export default compose(
  withReducer,
  withConnect,
)(FlightFilter);
