/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AirplaneIcon from '../AirplaneIcon';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { differenceInMinutes, differenceInHours, parse } from 'date-fns';

/* eslint-disable react/prefer-stateless-function */
class Logo extends React.Component {
  render() {
    let {carriers, stops, departing, arrivetime } = this.props;
    carriers = JSON.parse(carriers);
    stops = JSON.parse(stops);

    let stopString = 'Non-Stop';
    let airportsList = ''
    
    let start = new Date(departing);
    let end = new Date(arrivetime);
    let hours = differenceInHours(end, start)
    let minutes = differenceInMinutes(end, start) - hours*60 - 1;

    minutes = (Math.round(minutes / 15) * 15) % 60;
    minutes = minutes===0? '0'+minutes : minutes.toString();

    let flightTime = `${hours}h ${minutes}m`

    if (stops.length > 0) {

      stopString = `${stops.length} Stop`;
      airportsList = stops.join(', ');

      if(stops.length>1){
        stopString+='s'
      }
    }

    const logoComp = stops.length>0 ? (<div>
        &#x2708;&#x2708;
    </div>) : (<div>&#x2708;</div>);
      return (
        <div>
          {logoComp}
          <div>{stopString}</div>
          <div>{airportsList}</div>
          <div>{flightTime} </div>
        </div>)
    
  }
}

Logo.propTypes = {
  carriers: PropTypes.string,
  stops: PropTypes.string,
  departing: PropTypes.string,
  arrivetime: PropTypes.string
};

export default Logo;
