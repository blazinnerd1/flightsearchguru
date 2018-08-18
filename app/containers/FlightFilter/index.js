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
import DropdownDestFilter from 'containers/DropdownDestFilter/Loadable'
import {

  makeSelectSearchResults
} from 'containers/SearchBar2/selectors';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightFilter extends React.Component {
  constructor(props){
    super(props)
    this.processFlights = this.processFlights.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDestDropdownChange = this.onDestDropdownChange.bind(this);

    const { searchResults} = props;
    console.log(searchResults);
    const { flightDestinations, maxStop, maxPrice, minPrice } = this.processFlights(searchResults);
    this.state = {
      dirty:false,
      stops:0,
      price:0,
      excluding:{},
      maxStop,
      maxPrice,
      minPrice,
      destinations: flightDestinations
    }
  }

  processFlights(flights){
    const flightsArr = flights

    const flightStops = flightsArr.map(flight => JSON.parse(flight.stops).length);
    const flightPrices = flightsArr.map(flight => flight.price);

    const flightDestinations = flightsArr
      .map(flight => flight.to_id)
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

    const maxStop = Math.max(...flightStops);
    const maxPrice = Math.max(...flightPrices);
    const minPrice = Math.min(...flightPrices);
    return { flightDestinations, maxStop,maxPrice,minPrice}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const oldFlights = prevProps.flights;
    const newFlights = this.props.flights;
    if (oldFlights !== newFlights) {
      const { flightDestinations, maxStop, maxPrice, minPrice } = this.processFlights(flights);
      this.setState = {
        dirty: false,
        stops: 0,
        price: 0,
        excluding: [],
        maxStop,
        maxPrice,
        minPrice,
        destinations: flightDestinations
      }
    }
  }

  onDestDropdownChange(evt){
    console.log(evt);
  }

  onSave(){

  }

  render() {
    const {maxPrice, maxStop, minPrice, destinations, excluding } = this.state;
    console.log(this.state);
  
    return <div>
        <div>Filter By</div>
        <div>Stops</div>
        <div>
          <input type="range" min="1" max={maxStop} defaultValue={maxStop} className="slider" id="stopRange" />
        </div>
        <div>Price</div>
        <div>
          <input type="range" min={minPrice} max={maxPrice} defaultValue={maxPrice} className="slider" id="stopRange" />
        </div>
        <div>
        <DropdownDestFilter onChange={this.onDestDropdownChange} excluding={excluding} options={destinations} />
        </div>
      </div>;
  }
}

FlightFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchResults: PropTypes.obj,
};

const mapStateToProps = createStructuredSelector({
  flightfilters: makeSelectFilters(),
  searchResults: makeSelectSearchResults(),
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
