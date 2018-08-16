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

import { updateSearchParams, searchFlightsSuccess } from './actions';
import { makeSelectSearchParams, /*makeSelectFlightResults*/ } from './selectors';
import {
  makeSelectMetaflightchoice,
  makeSelectMetadest,
  makeSelectMetadeparting,
  makeSelectMetalength,
  makeSelectMetaending,
} from '../SearchBar/selectors';
import { makeSelectGeodata } from '../HomePage/selectors';
import { UPDATE_SEARCH_PARAMS, SEARCH_FLIGHTS, SEARCH_FLIGHTS_SUCCESS, } from './constants';

import Destination from '../../components/Destination/Loadable';
import DepartDates from '../../components/DepartDates/Loadable';

import request from 'utils/request';
import { formatDestinations } from './formatDest';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      departingAirport: '',
      destination: '',
      dates: [],
    };

    this.updateSearchDepartingAirport = this.updateSearchDepartingAirport.bind(
      this,
    );
    this.updateSearchDestination = this.updateSearchDestination.bind(this);
    this.updateSearchDates = this.updateSearchDates.bind(this);
    // this.updateSearchEndDate = this.updateSearchEndDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchDepartingAirport(evt) {
    if (evt.preventDefault) {
      // evt is a key stroke
      evt.preventDefault();
      this.setState({
        departingAirport: evt.target.value,
      });
    } else {
      // evt is a selection from dropdown
      this.setState({
        departingAirport: evt.id,
      });
    }
  }

  updateSearchDestination(evt) {
    if (evt.preventDefault) {
      // evt is a key stroke
      evt.preventDefault();
      this.setState({
        destination: evt.target.value,
      });
    } else {
      // evt is a selection from dropdown
      this.setState({
        destination: evt.id,
      });
    }
  }

  updateSearchDates(evt, inst) {
    console.log('search date evt: ', evt)
    const selectedDateArray = evt.valueText.split(', ');
    this.setState({
      dates: selectedDateArray,
    }, () => console.log('selected dates: ', this.state.dates));
  }


  handleSubmit(evt) {
    evt.preventDefault();
    console.log('handleSubmit fired =================================');
    this.props.onSubmitForm(this.state);
  }

  render() {
    console.log('rendering')
    const {
      metaflightchoice,
      metadest,
      metadeparting,
      metalength,
      metaending,
      searchParams,
      geodata,
      // flightResults,
    } = this.props;


    const geodataAll = geodata._root.entries;
    const regions = geodataAll[0][1];
    const countries = geodataAll[2][1];
    const cities = geodataAll[1][1];
    
    
    let destinations;
    if (cities.length) {
      console.log('Geodata is loaded');
      destinations = formatDestinations(geodataAll, metadest);
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
  onSubmitForm: PropTypes.func,
  geodata: PropTypes.object,
  // flightResults: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: state => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadRepos());
      // evt.preventDefault();

      const searchParams = {
        type: UPDATE_SEARCH_PARAMS,
        value: state,
      };
      dispatch(updateSearchParams(searchParams));

      // const searchParameters = {
      //   type: SEARCH_FLIGHTS,
      //   value: state,
      // };
      // dispatch(searchFlights(searchParameters));

      const {
        departingAirport,
        destination,
        startDate,
        endDate,
      } = state;

      const graphqlquery = `
      {
        oneWayFlightsToAirports(
          from: "${departingAirport}"
          to: "${destination}"
          start: "${startDate}"
          end: "${endDate}"
        ) {
          id
          from_id
          to_id
          departing
          price
          created_at
          carriers
          stops
          arrivetime
        }
      }
      `;

      const requestURL = `http://localhost:3000/graphql?query=${graphqlquery}`;

      try {
        console.log('<><><><><><><><><><><><><><><><><><><><><>');
        request(requestURL)
          .then((res) => {
            const flightData = res.data;
            console.log(flightData)
            const searchResults = {
              type: SEARCH_FLIGHTS_SUCCESS,
              value: {flights: flightData['oneWayFlightsToAirports']},
            };
            dispatch(searchFlightsSuccess(searchResults));
          })
        // yield put(searchFlightsSuccess({ flightData }));
      } catch (err) {
        console.log('err', err);
      }
    },
  };
}


const mapStateToProps = createStructuredSelector({
  metaflightchoice: makeSelectMetaflightchoice(),
  metadest: makeSelectMetadest(),
  metadeparting: makeSelectMetadeparting(),
  metalength: makeSelectMetalength(),
  metaending: makeSelectMetaending(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),

  searchParams: makeSelectSearchParams(),
  geodata: makeSelectGeodata(),
  // flightResults: makeSelectFlightResults(),
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
