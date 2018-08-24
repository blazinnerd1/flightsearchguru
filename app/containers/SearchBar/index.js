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
import injectSaga from 'utils/injectSaga';
// import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import CenteredSection from './styled-components/CenteredSection';
import Label from './styled-components/Label';
import messages from './messages';

import {
  makeSelectSearchOptions,
  makeSelectDepartingOptions,
  makeSelectDestinationOptions,
} from './selectors';

import { typeOptions } from './menuOptions';

import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar extends React.PureComponent {

  constructor(props) {
    super(props);

    this.updateSearchDepartingAirport = this.updateSearchDepartingAirport.bind(
      this,
    );
    this.updateSearchDestinations = this.updateSearchDestinations.bind(this);
    this.updateSearchDates = this.updateSearchDates.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // parse the search query and set state if it exists!
  }

  updateSearchDepartingAirport(departingAirport) {
    this.setState({
      departingAirport
    });
  }


  updateSearchDestinations(destinations) {
    this.setState({
      destinations
    });
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
    const searchParams = {
      type: UPDATE_SEARCH_PARAMS,
      value: this.state,
    };
    this.props.onUpdateSearchParams(searchParams);

    const searchParameters = {
      type: SEARCH_FLIGHTS,
      value: this.state,
    };
    this.props.onSearchFlights(searchParameters);
  }



  render() {
    const { searchOptions, departingOptions, destinationOptions } = this.props;
    const {
      flightType,
      departureTimeType,
      departureTimes,
      departingAirport,
      destinations,
    } = searchOptions.toObject();

    return (
      <div>
        <CenteredSection>
          <Label>
            <FormattedMessage {...messages.metaflightchoice} />
            <Select
              id="flightTypeSelect"
              value={flightType}
              options={typeOptions}
              onChange={this.props.onChangeFlightType}
            />
          </Label>
          <Form onSubmit={this.handleSubmit}>
            <Departures
              update={this.updateSearchDepartingAirport}
              departures={departingAirports}
            />
            <Destination
              update={this.updateSearchDestinations}
              destinations={destinationOptions}
              value={destinations}
              placeholder={destPlaceholder}
            />
            <DepartDates
              departingType={departingType}
              updateDates={
                this.updateSearchDates}
              selectedDates={this.state.dates}
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
};

export function mapDispatchToProps(dispatch) {
  return { onChangeFlightType: obj => console.log(`can't change type!`)) };
}

const mapStateToProps = createStructuredSelector({
  searchOptions: makeSelectSearchOptions(),
  departingOptions: makeSelectDepartingOptions(),
  destinationOptions: makeSelectDestinationOptions(),
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
