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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectFlightResults } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import FlightList from '../../components/FlightList/index';
import FlightFilter from '../FlightFilter/Loadable';
import LoadingIndicator from '../../components/LoadingIndicator';


/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {
  render() {
    const { flightResults } = this.props;
    console.log('flight results: ', flightResults);
    if (!flightResults || !flightResults.flights) {
      return (<div></div>)
    }
    // if (true){
    //   return(<LoadingIndicator />)
    // }
    return (
      <div style={{ display:'flex' }}> 
        <FlightFilter />
        <FlightList flights={flightResults.flights} />
      </div>);
  }
}

FlightResults.propTypes = {
  flightResults: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  flightResults: makeSelectFlightResults(),
});

function mapDispatchToProps(dispatch) {
  return {
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'flightresults', reducer });
const withSaga = injectSaga({ key: 'flightresults', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FlightResults);
