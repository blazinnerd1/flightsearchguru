/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { differenceInMinutes, differenceInHours, parse } from 'date-fns';

/* eslint-disable react/prefer-stateless-function */
class Logo extends React.Component {
  render() {
    const segments = JSON.parse(this.props.info);
   
    let showAirports = false;
    let stopString = 'Non-Stop';
    let airportsList = []
    

    const depttime = Date.parse(segments[0].DepartureDateTime.split('T').join(' '));
    const arrivetime = Date.parse(segments[segments.length - 1].ArrivalDateTime.split('T').join(' '));

    let hours = differenceInHours(arrivetime, depttime)
    let minutes = differenceInMinutes(arrivetime, depttime) - hours*60 - 1;

    minutes = (Math.round(minutes / 15) * 15) % 60;
    minutes = minutes===0? '0'+minutes : minutes.toString();

    let flightTime = `${hours}h ${minutes}m`

    if (segments.length > 1) {
      stopString = `${segments.length-1} Stop`;

      segments.slice(1).forEach(segment=>{
        airportsList.push( segment.DepartureAirport.LocationCode);
      })

      airportsList = airportsList.join(', ');
      if(segments.length>=3){
        stopString+='s'
      }
    }
    

    const logoComp = showAirports ? (<div>
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
  info: PropTypes.string,
};

export default Logo;
