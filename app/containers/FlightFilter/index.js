/**
 *
 * FlightFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectFilters } from 'containers/SearchBar2/selectors';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightFilter extends React.Component {
  constructor(props){

    super(props)

    const { flightPrices, flightStops, flightDestinations } = props;
    const maxStop = Math.max(...flightStops);
    const maxPrice = Math.max(...flightPrices);
    const minPrice = Math.min(...flightPrices);

    this.state = {
      dirty:false,
      stops:0,
      price:0,
      excluding:[],
      maxStop,
      maxPrice,
      minPrice,
      destinations: flightDestinations
    }
  }

  render() {
    return (
      <div>
        <div>Filter By</div>
        <div>Stops</div>
        <div>
          <input
            type="range"
            min="1"
            max={maxStop}
            defaultValue={maxStop}
            className="slider"
            id="stopRange"
          />
        </div>
        <div>Price</div>
        <div>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            defaultValue={maxPrice}
            className="slider"
            id="stopRange"
          />
        </div>
        <div>DROPDOWN</div>
        
      </div>
    );
  }
}

FlightFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  flightPrices: PropTypes.array,
  flightStops: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  flightfilters: makeSelectFilters(),
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

export default compose(withConnect)(FlightFilter);
