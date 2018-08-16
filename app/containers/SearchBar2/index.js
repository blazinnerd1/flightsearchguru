/**
 *
 * SearchBar2
 *
 */

import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import makeSelectSearchBar2 from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import CenteredSection from './styled-components/CenteredSection';
import Form from './styled-components/Form';
import Label from './styled-components/Label';
import Button from './styled-components/Button';
import Input from './styled-components/Input';

import { updateSearchParams, searchFlights, searchFlightsSuccess } from './actions';
import { makeSelectSearchParams, makeSelectSearchFlightResults } from './selectors';
import {
  makeSelectMetaflightchoice,
  makeSelectMetadest,
  makeSelectMetadeparting,
  makeSelectMetalength,
  makeSelectMetaending,
} from '../SearchBar/selectors';
import { UPDATE_SEARCH_PARAMS, SEARCH_FLIGHTS, SEARCH_FLIGHTS_SUCCESS, } from './constants';

import Destination from '../../components/Destination/Loadable';
import DepartDates from '../../components/DepartDates/Loadable';

// import request from 'utils/request';
import { formatDestinations } from './formatDest';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      departingAirport: props.searchParams.departingAirport,
      destination: props.searchParams.destination,
      dates: props.searchParams.dates,
    };

    this.updateSearchDepartingAirport = this.updateSearchDepartingAirport.bind(
      this,
    );
    this.updateSearchDestination = this.updateSearchDestination.bind(this);
    this.updateSearchDates = this.updateSearchDates.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchDepartingAirport(evt) {
    // evt is a selection from dropdown
    this.setState({
      departingAirport: evt.id,
    });
  }

  updateSearchDestination(evt) {
    // evt is a selection from dropdown
    this.setState({
      destination: evt.id,
    });
  }

  updateSearchDates(evt, inst) {
    if (evt.valueText) {
      const selectedDateArray = evt.valueText.split(', ');
      this.setState({
        dates: selectedDateArray,
      }, () => console.log('selected dates: ', this.state.dates));
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
    console.log('rendering searchbar2')
    const {
      metaflightchoice,
      metadest,
      metadeparting,
      metalength,
      metaending,
      searchParams,
      geoData,
    } = this.props;

    let destinations;
    if (geoData._root.entries) {
      console.log('Geodata is loaded');
      destinations = formatDestinations(geoData._root.entries, metadest);
    }

    const departures = [
      {
        id: 'AUS',
        label:
          // 'AUS|Austin|Austin Bergstrom International Airport|United States of America',
          'AUS - Austin',
      },
    ];

    return (
      <div>
        <CenteredSection>
          <Form onSubmit={this.handleSubmit}>
            <Label>
              <FormattedMessage {...messages.searchDeparture} />
              <Select
                // isSearchable="True"
                onChange={evt => this.updateSearchDepartingAirport(evt)}
                options={departures}
                placeholder="Select"
              />
            </Label>
            <Destination 
              update={evt => this.updateSearchDestination(evt)}
              destinations={destinations}
              placeholder={'Select'}
              metadest={metadest}
            />
            <DepartDates
              metadeparting={metadeparting}
              updateDates={(evt, inst) => {this.updateSearchDates(evt, inst)}}
            />
            <Button type="submit">Consult Guru </Button>
          </Form>
        </CenteredSection>
      </div>
    );
  }
}

SearchBar2.propTypes = {
  metaflightchoice: PropTypes.string,
  metadest: PropTypes.string,
  metadeparting: PropTypes.string,
  metalength: PropTypes.string,
  metaending: PropTypes.string,
  searchParams: PropTypes.object,
  onUpdateSearchParams: PropTypes.func,
  onSearchFlights: PropTypes.func,
  geoData: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateSearchParams: obj => dispatch(updateSearchParams(obj)),
    onSearchFlights: obj => dispatch(searchFlights(obj)),
  };
};


const mapStateToProps = createStructuredSelector({
  metaflightchoice: makeSelectMetaflightchoice(),
  metadest: makeSelectMetadest(),
  metadeparting: makeSelectMetadeparting(),
  metalength: makeSelectMetalength(),
  metaending: makeSelectMetaending(),
  searchParams: makeSelectSearchParams(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchBar2', reducer });
const withSaga = injectSaga({ key: 'searchBar2', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchBar2);
