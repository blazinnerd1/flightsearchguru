/*
 * SearchBar
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import queryString from 'query-string';
import CenteredSection from './styled-components/CenteredSection';
import Label from './styled-components/Label';
import messages from './messages';
import Departures from 'components/Departures';
import Destination from 'components/Destination';
import DepartDates from 'components/DepartDates';
import Form from './styled-components/Form';
import Button from './styled-components/Button';
import { makeSelectSearchOptions } from './selectors';
import { withRouter } from 'react-router-dom';
import { EXECUTE_SEARCH } from 'containers/SearchResults/constants';
import FlightTypeSelect from 'components/FlightTypeSelect';

import {
  departureLocations,
  destinationLocations,
  typeOptions,
  timeOptions,
} from './menuOptions';

import { changeSearchParameters } from './actions';

import { removeDuplicateDests, removeInvalidDestination } from './filterDestinations';
import { generateDateArray } from './generateDateArray';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    const startingCity = departureLocations.find(x => x.value.split('|')[1] === 'AUS');

    this.state = { 
      flightType: typeOptions[0], 
      departureTimeType: timeOptions[1], 
      departureTimes: [], 
      departingAirport: startingCity, 
      destinations: [], 
      departingOptions: departureLocations, 
      destinationOptions: destinationLocations 
    };

    this.handleChangeDepartingAirport = this.handleChangeDepartingAirport.bind(this);
    this.handleChangeDestinations = this.handleChangeDestinations.bind(this);
    this.updateSearchDates = this.updateSearchDates.bind(this);
    this.handleChangeFlightType = this.handleChangeFlightType.bind(this);
    this.handleChangeDepartureTimeType = this.handleChangeDepartureTimeType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.executeSearch = this.executeSearch.bind(this);
  }

  componentDidMount() {
    // Parse query string from url
    const queries = queryString.parse(this.props.location.search);
    if (queries.query) {
      const jsonString = decodeURI(queries.query);
      // Set search parameters based on parsed query string
      const { flightType, departingAirport, departureTimeType, departureTimes, destinations } = JSON.parse(jsonString);
      this.setState(
        {
          flightType,
          departingAirport,
          departureTimeType,
          departureTimes,
          destinations,
        },
        () => {
          this.handleChangeDestinations(destinations);
          this.executeSearch();
        },
      );
    }
  }

  handleChangeFlightType(e) {
    console.log(e);
  }

  executeSearch() {
    // parse into required params for our search
    const { flightType, departureTimeType, departureTimes, departingAirport, destinations } = this.state;

    // execute startSearch from SearchResults container
    this.props.startSearch({
      flightType,
      departureTimeType,
      departureTimes,
      departingAirport,
      destinations,
    });
  }

  handleChangeDepartingAirport(departingAirport) {
    this.setState({ departingAirport });
  }

  handleChangeDestinations(newDestinations) {
    const destinations = removeDuplicateDests(newDestinations);
    const destinationOptions = removeInvalidDestination(destinations, destinationLocations);

    this.setState({ destinations, destinationOptions });
  }

  updateSearchDates(evt) {
    // set date array for day and week departure window
    console.log(evt);
    if (evt.valueText) {
      const selectedDateArray = evt.valueText.split(', ');
      this.setState({ departureTimes: selectedDateArray });
    }

    // set date array for month departure windows
    if (Array.isArray(evt)) {
      let selectedDateArray = [];
      evt.forEach(month => {
        // generate array of date objects for each month
        selectedDateArray = selectedDateArray.concat(generateDateArray(month));
      });
      this.setState({ departureTimes: selectedDateArray });
    }
  }

  handleChangeDepartureTimeType(departureTimeType) {
    this.setState({departureTimeType})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // check to make sure all required fields are present

    // build query

    // push to url

    const { flightType, departureTimeType, departureTimes, departingAirport, destinations } = this.state;
    const query = encodeURI(JSON.stringify({
        flightType,
        departureTimeType,
        departureTimes,
        departingAirport,
        destinations,
      }));
    this.props.history.push(`/search?query=${query}`);
    this.executeSearch();
  }

  render() {
    const { flightType, departureTimeType, departureTimes, departingAirport, destinations, departingOptions, destinationOptions } = this.state;

    return (
      <div>
        <CenteredSection>
          <Form onSubmit={this.handleSubmit}>
            <FlightTypeSelect value={flightType} options={typeOptions} isDisabled onChange={this.handleChangeFlightType} />
            <Departures update={this.handleChangeDepartingAirport} options={departingOptions} value={departingAirport} />
            <Destination update={this.handleChangeDestinations} options={destinationOptions} value={destinations} />
            <DepartDates departingType={departureTimeType} updateDates={this.updateSearchDates} selectedDates={departureTimes} />
            <Label>
              <FormattedMessage {...messages.metadeparting} />
              <Select id="departingtimetypeselector" value={departureTimeType} options={timeOptions} onChange={this.handleChangeDepartureTimeType} />
            </Label>
            <Button type="submit">Consult Guru</Button>
          </Form>
        </CenteredSection>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmitForm: PropTypes.func,
  departingOptions: PropTypes.array,
  destinationOptions: PropTypes.array,
  startSearch: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return { 
    startSearch: searchOptions => dispatch({
      type: EXECUTE_SEARCH,
      searchOptions,
    })
  };
}

const mapStateToProps = createStructuredSelector({
  searchOptions: makeSelectSearchOptions(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchbar', reducer });

export default withRouter(
  compose(
    withReducer,
    withConnect,
  )(SearchBar),
);
