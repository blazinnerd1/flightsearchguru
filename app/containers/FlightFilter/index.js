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
import SortByMenu from 'components/SortByMenu';
import { CHANGE_FILTER_OPTIONS } from 'containers/SearchResults/constants';
import { makeSelectSearchResults } from 'containers/SearchResults/selectors';
import FilterDestinationsMenuDropdown from 'containers/FilterDestinationsMenuDropdown';
import ViewMenu from 'components/ViewMenu';
import PriceFilter from 'containers/PriceFilter';
import PriceAlertButton from 'components/PriceAlertButton';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightFilter extends React.Component {
  constructor(props) {
    super(props);
    this.processFlights = this.processFlights.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDestDropdownChange = this.onDestDropdownChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleHighestPriceChange = this.handleHighestPriceChange.bind(this);
    this.handleDestExcludeChange = this.handleDestExcludeChange.bind(this);
    const { searchResults } = props;
    const { flightDestinations, maxStop, flightPrices } = this.processFlights(
      searchResults,
    );
    this.state = {
      dirty: false,
      maxStops: 0,
      highestPrice: 0,
      excludeDestinations: [],
      maxStop,
      flightPrices,
      sortBy: 'price',
      destinations: flightDestinations,
    };
  }

  processFlights(flights) {
    const flightsArr = flights;

    const flightStops = flightsArr.map(flight => flight.stops.length);
    const flightPrices = flightsArr.map(flight => flight.price).sort();

    const flightDestinations = flightsArr
      .map(flight => flight.to_id)
      .filter((value, index, self) => self.indexOf(value) === index);

    const maxStop = Math.max(...flightStops);

    return { flightDestinations, maxStop, flightPrices };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const oldFlights = prevProps.searchResults;
    const newFlights = this.props.searchResults;

    if (oldFlights !== newFlights) {
      const { flightDestinations, maxStop, flightPrices } = this.processFlights(
        newFlights,
      );

      this.setState({
        dirty: false,
        maxStops: 0,
        highestPrice: 0,
        excludeDestinations: [],
        maxStop,
        flightPrices,
        sortBy: 'price',
        destinations: flightDestinations,
      });
    }
  }

  onDestDropdownChange(destToToggle) {
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

  handleSortChange(sortBy) {
    console.log(sortBy);
    this.setState({ sortBy }, this.onSave);
  }


  handleHighestPriceChange(highestPrice) {
    this.setState({ highestPrice }, this.onSave);
  }

  handleDestExcludeChange(val) {
    const i = this.state.excludeDestinations.indexOf(val);
    const excludeDestinations = this.state.excludeDestinations.slice();
    if (i !== -1) {
      excludeDestinations.splice(i, 1);
    } else if (
      this.state.destinations.length - 1 >
      excludeDestinations.length
    ) {
      excludeDestinations.push(val);
    }
    this.setState({ excludeDestinations }, this.onSave);
  }

  onSave() {
    const { maxStops, highestPrice, excludeDestinations, sortBy } = this.state;
    // remove dirtyness

    this.props.refilter({
      maxStops,
      highestPrice,
      excludeDestinations,
      sortBy,
    });
    this.setState({ dirty: false });
  }

  render() {
    const {
      flightPrices,
      highestPrice,
      destinations,
      sortBy,
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

    return (
      <div>
        <SortByMenu sortBy={sortBy} handleSortChange={this.handleSortChange} />
        <ViewMenu />
        <FilterDestinationsMenuDropdown
          destinations={destinations}
          excludeDestinations={excludeDestinations}
          handleDestExcludeChange={this.handleDestExcludeChange}
        />
        <PriceFilter
          flightPrices={flightPrices}
          highestPrice={highestPrice}
          handleHighestPriceChange={this.handleHighestPriceChange}
        />
        <PriceAlertButton />
        {/* <div>Stops</div>
        <div>
          <input type="range" min="1" max={this.state.maxStop} defaultValue={this.state.maxStop} className="slider" id="stopRange" />
        </div>
        <div>Price</div>
        <div>
          <input type="range" min={this.state.minPrice} max={this.estate.maxPrice} defaultValue={this.state.maxPrice} className="slider" id="stopRange" />
        </div>
        <div>{filterByDestinationDropdown}</div> */}
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
    refilter: newFilterOptions =>
      dispatch({ type: CHANGE_FILTER_OPTIONS, newFilterOptions }),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FlightFilter);
