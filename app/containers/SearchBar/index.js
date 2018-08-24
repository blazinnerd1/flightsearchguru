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
import injectSaga from 'utils/injectSaga';
import CenteredSection from './styled-components/CenteredSection';
import Label from './styled-components/Label';
import messages from './messages';
import Departures from 'components/Departures';
import Destination from 'components/Destination';
import DepartDates from 'components/DepartDates';
import Form from './styled-components/Form';
import Button from './styled-components/Button';
import { makeSelectSearchOptions } from './selectors';
import {
  departureLocations,
  destinationLocations,
  typeOptions,
  timeOptions,
} from './menuOptions';
import { changeSearchParameters } from './actions';

import { generateDateArray } from './generateDateArray';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);

    const startingCity = departureLocations.find(x => x.airport === 'AUS');
    this.state = {
      flightType: typeOptions[0].value,
      departureTimeType: timeOptions[1].value,
      departureTimes: [],
      departingAirport: startingCity,
      destinations: [],
      departingOptions: departureLocations,
      destinationOptions: destinationLocations,
    };

    this.handleChangeDepartingAirport = this.handleChangeDepartingAirport.bind(
      this,
    );
    this.handleChangeDestinations = this.handleChangeDestinations.bind(this);
    this.updateSearchDates = this.updateSearchDates.bind(this);
    this.handleChangeFlightType = this.handleChangeFlightType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // parse the search query and set state if it exists!
  }

  handleChangeFlightType(e) {
    console.log(e);
  }

  handleChangeDepartingAirport(departingAirport) {
    this.setState({
      departingAirport,
    });
  }

  handleChangeDestinations(destinations) {
    this.setState(
      {
        destinations,
      },
      () => console.log(this.state.destinations),
    );
  }

  updateSearchDates(evt) {
    // set date array for day and week departure window
    if (evt.valueText) {
      const selectedDateArray = evt.valueText.split(', ');
      this.setState({
        dates: selectedDateArray,
      });
    }

    // set date array for month departure windows
    if (Array.isArray(evt)) {
      let selectedDateArray = [];
      evt.forEach(month => {
        // generate array of date objects for each month
        selectedDateArray = selectedDateArray.concat(generateDateArray(month));
      });

      this.setState({
        dates: selectedDateArray,
      });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log('handling submit');
  }

  render() {
    const {
      flightType,
      departureTimeType,
      departureTimes,
      departingAirport,
      destinations,
      departingOptions,
      destinationOptions,
    } = this.state;

    return (
      <div>
          <CenteredSection>
            <Label>
              <FormattedMessage {...messages.metaflightchoice} />
              <Select
              id="flightTypeSelect"
              value={flightType}
              options={typeOptions}
              onChange={this.handleChangeFlightType}
            />
            </Label>
            <Form onSubmit={this.handleSubmit}>
            <Departures
              update={this.handleChangeDepartingAirport}
              options={departingOptions}
              value={departingAirport}
            />
              <Destination
              update={this.handleChangeDestinations}
              options={destinationOptions}
              value={destinations}
            />
            <DepartDates
              departingType={departureTimeType}
              updateDates={this.updateSearchDates}
              selectedDates={this.state.departureTimes}
            />
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
};

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeFlightType: obj => changeFlightType(obj)
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

export default compose(
  withReducer,
  withConnect,
)(SearchBar);
