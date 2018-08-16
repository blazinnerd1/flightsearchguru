/**
 *
 * FlightResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { makeSelectFilteredFlights } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import FlightList from '../../components/FlightList/index';
import FlightFilter from '../FlightFilter/Loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

const fakeflights = [{ "from_id": "AUS", "route_with_day": "AUS_AMS_2018-08-17", "to_id": "AMS", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\",\"AA\"]", "stops": "[\"BFG\",\"LOL\"]", "arrivetime": "2018-08-19T17:54:01.892Z", "price": 322, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_ARN_2018-08-17", "to_id": "ARN", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\"]", "stops": "[\"\"]", "arrivetime": "2018-08-18T17:54:01.892Z", "price": 350, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_BRN_2018-08-17", "to_id": "BRN", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\"]", "stops": "[\"\"]", "arrivetime": "2018-08-19T17:54:01.892Z", "price": 517, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_CMB_2018-08-17", "to_id": "CMB", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\"]", "stops": "[\"\"]", "arrivetime": "2018-08-18T17:54:01.892Z", "price": 542, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_CPH_2018-08-17", "to_id": "CPH", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\",\"AA\"]", "stops": "[\"\"]", "arrivetime": "2018-08-18T17:54:01.892Z", "price": 362, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_HND_2018-08-17", "to_id": "HND", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\"]", "stops": "[\"BFG\",\"LOL\"]", "arrivetime": "2018-08-18T17:54:01.892Z", "price": 596, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_LHR_2018-08-17", "to_id": "LHR", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\"]", "stops": "[\"\"]", "arrivetime": "2018-08-19T17:54:01.892Z", "price": 422, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_MEX_2018-08-17", "to_id": "MEX", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\"]", "stops": "[\"\"]", "arrivetime": "2018-08-19T17:54:01.892Z", "price": 313, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_MCT_2018-08-17", "to_id": "MCT", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\",\"AA\"]", "stops": "[\"BFG\",\"LOL\"]", "arrivetime": "2018-08-19T17:54:01.892Z", "price": 517, "created_at": "2018-08-16T16:54:01.893Z" }, { "from_id": "AUS", "route_with_day": "AUS_MVD_2018-08-17", "to_id": "MVD", "departing": "2018-08-17T17:54:01.892Z", "carriers": "[\"ET\"]", "stops": "[\"BFG\",\"LOL\"]", "arrivetime": "2018-08-18T17:54:01.892Z", "price": 496, "created_at": "2018-08-16T16:54:01.893Z" }]

/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {
  

  render() {
    //const { flightResults } = this.props;
    const flights = fakeflights;
    console.log('flight results: ', flights);
    if (!flightResults.length) {
      return (<div></div>)
    }
    // if (true){
    //   return(<LoadingIndicator />)
    // }
    return (
      <div style={{ display:'flex' }}> 
        <FlightFilter />
        <FlightList flights={flights} />
      </div>);
  }
}

FlightResults.propTypes = {
  flights: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  flights: makeSelectFilteredFlights(),
});


const withConnect = connect(
  mapStateToProps,
);

const withReducer = injectReducer({ key: 'flightresults', reducer });

export default compose(
  withReducer,
  withConnect,
)(FlightResults);
