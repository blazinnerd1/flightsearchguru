/**
 *
 * FlightList
 *
 */

import React from 'react';
import Flight from '../Flight/index';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class FlightList extends React.Component {
  render() {
    // console.log('-------------------------------------------------')
    // console.log(Array.isArray(this.props.flights));
    //console.log('flight results in FlightList component', this.props.flights);
    if(this.props.flights.length===0){
      return(<div>No Flights Found</div>)
    }
    return (
      <div>
        <div style={{float:'left', marginLeft:'10%'}}>
          Cheapest Departure
        </div>
        <div
          style={{
            width: '80%',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {this.props.flights.map((flight, key) => <Flight key={`flight_${key}`}flight={flight} />)}
        </div>
      </div>
    );
  }
}

FlightList.propTypes = {
  flights: PropTypes.array, 
};

export default FlightList;
