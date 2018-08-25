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
import DropdownDestFilter from 'containers/DropdownDestFilter';
import { changeFilterOptions } from 'containers/SearchResults/actions';
import { makeSelectSearchResults } from 'containers/SearchResults/selectors';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightFilter extends React.Component {
  constructor(props) {
    super(props);
    this.processFlights = this.processFlights.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDestDropdownChange = this.onDestDropdownChange.bind(this);
    const { searchResults } = props;
    console.log(props);
    const {
      flightDestinations,
      maxStop,
      maxPrice,
      minPrice,
    } = this.processFlights(searchResults);
    this.state = {
      dirty: false,
      maxStops: 0,
      highestPrice: 0,
      excludeDestinations: [],
      maxStop,
      maxPrice,
      minPrice,
      destinations: flightDestinations,
    };
  }

  processFlights(flights) {
    const flightsArr = flights;

    const flightStops = flightsArr.map(flight => flight.stops.length);
    const flightPrices = flightsArr.map(flight => flight.price);

    const flightDestinations = flightsArr
      .map(flight => flight.to_id)
      .filter((value, index, self) => self.indexOf(value) === index);

    const maxStop = Math.max(...flightStops);
    const maxPrice = Math.max(...flightPrices);
    const minPrice = Math.min(...flightPrices);
    return { flightDestinations, maxStop, maxPrice, minPrice };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const oldFlights = prevProps.searchResults;
    const newFlights = this.props.searchResults;

    if (oldFlights !== newFlights) {
      const {
        flightDestinations,
        maxStop,
        maxPrice,
        minPrice,
      } = this.processFlights(newFlights);
      this.setState({
        dirty: false,
        maxStops: 0,
        highestPrice: 0,
        excludeDestinations: [],
        maxStop,
        maxPrice,
        minPrice,
        destinations: flightDestinations,
      });
    }
  }

  onDestDropdownChange(destToToggle) {
    console.log(destToToggle);

    const newExcluding = this.state.excludeDestinations.slice();
    const index = newExcluding.indexOf(destToToggle);

    if (index === -1) {
      // don't allow the last checkbox to be clicked!
      if (newExcluding.length !== this.state.destinations.length - 1) {
        newExcluding.push(destToToggle);
        this.setState({
          excludeDestinations: newExcluding,
          dirty: true,
        });
      }
    } else {
      newExcluding.splice(index, 1);

      this.setState({ excludeDestinations: newExcluding, dirty: true });
    }
  }

  onSave() {
    console.log(this.state);
    const { maxStops, highestPrice, excludeDestinations } = this.state;
    // remove dirtyness
    console.log('sending filters', maxStops, highestPrice, excludeDestinations);
    this.props.refilter({ maxStops, highestPrice, excludeDestinations });
    this.setState({ dirty: false });
  }

  render() {
    const {
      maxPrice,
      maxStop,
      minPrice,
      destinations,
      dirty,
      excludeDestinations,
    } = this.state;

    let saveButton = <div>Filter By</div>;
    if (dirty) {
      saveButton = (
        <div>
          <button onClick={this.onSave}>Save</button>
        </div>
      );
    }

    let filterByDestinationDropdown = <span />;

    if (destinations.length > 1) {
      filterByDestinationDropdown = (
        <DropdownDestFilter
          onChange={this.onDestDropdownChange}
          excluding={excludeDestinations}
          options={destinations}
        />
      );
    }

    return (
      <div>
        <div>{saveButton}</div>
        <div>Stops</div>
        <div>
          <input
            type="range"
            min="1"
            max={this.state.maxStop}
            defaultValue={this.state.maxStop}
            className="slider"
            id="stopRange"
          />
        </div>
        <div>Price</div>
        <div>
          <input
            type="range"
            min={this.state.minPrice}
            max={this.state.maxPrice}
            defaultValue={this.state.maxPrice}
            className="slider"
            id="stopRange"
          />
        </div>
        <div>{filterByDestinationDropdown}</div>
      </div>
    );
  }
}

FlightFilter.propTypes = {
  searchResults: PropTypes.array,
  // flightFilters: PropTypes.object,
  refilter: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // flightFilters: makeSelectFilters(),
  searchResults: makeSelectSearchResults(),
});

export function mapDispatchToProps(dispatch) {
  return {
    refilter: newFilterOptions => changeFilterOptions(newFilterOptions),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FlightFilter);
