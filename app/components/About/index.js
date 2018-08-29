/**
 *
 * About2
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  countries,
  cities,
  airports,
  badAirportCodes,
} from '../../../data/data';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { withStyles } from '@material-ui/core/styles';

const buildRow = airport => {
  const city = cities.find(c => c.airport === airport.id);
  const country = countries.find(c => c.id === city.id_countries);
  return {
    airport_name: airport.name,
    airport_id: airport.id,
    city: city.name,
    country: country.name,
    emoji: country.emoji,
  };
};

const sortByCountry = (a, b) =>
  a.country > b.country ? 1 : b.country > a.country ? -1 : 0;

const allRows = airports.map(airport => buildRow(airport));
let supported = allRows.filter(x => !badAirportCodes.includes(x.airport_id));
let notSupported = allRows.filter(x => badAirportCodes.includes(x.airport_id));
supported = supported.sort(sortByCountry);
notSupported = notSupported.sort(sortByCountry);

/* eslint-disable react/prefer-stateless-function */
const tableMaker = countries => (
  <div style={{ textAlign: 'left' }}>
    <table style={{width:'100%'}}>
      <thead style={{ fontWeight: 'bold' }}>
        <tr>
          <th>Country</th>
          <th>City</th>
          <th style={{textAlign:'right'}}>Airport</th>
        </tr>
      </thead>
      <tbody>
        {countries.map(row => (
          <tr key={`supp_${row.airport_id}`}>
            <td>{`${row.emoji} ${row.country}`}</td>
            <td>{row.city}</td>
            <td style={{ textAlign: 'right' }}>
              <span title={row.airport_name}>{row.airport_id}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const styles = {
  card:{
    marginBottom:'20px'
  }
}

class About extends React.Component {
  render() {
    const {classes} = this.props;
    return <div style={{ textAlign: 'center', backgroundColor: '#fafafa', paddingTop: '30px' }}>
        <Card className={classes.card}>
          <CardContent>
            <h2>What set's us apart from the rest?</h2>
          <div style={{
            textAlign: 'left',
            verticalAlign: 'middle',
                height: '44px', 
                boxShadow: `0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)`}}>
            <span>Flights to the Carribean or Bali departing in the next four weekends</span>
            <span style={{
              verticalAlign: 'middle',
              color: '#4285f4', 
              position: 'relative', 
              right: '0'
            }}>
              <svg style={{right:'0',
                height: '24px',
                width: '24px'}}focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg></span>
            </div>
            <div style={{ marginTop: '50px' }}>
              Try that search with the other guys!
            </div>
            <div style={{ marginTop: '20px' }}>
              Find the cheapest flights anywhere in miliseconds ⏱️🔥
            </div>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3>World's #1 Flight Exploration Engine</h3>
            <div style={{ marginBottom: '30px' }}>Mix and Match</div>
            <table style={{ width: '100%' }}>
              <thead style={{ fontWeight: 'bold' }}>
                <tr>
                  <th>Departures</th>
                  <th>Destinations</th>
                  <th>Results</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>☀️ Day(s)</td>
                  <td>🇪🇺 Regions</td>
                  <td>📇 List</td>
                </tr>
                <tr>
                  <td>
                    <DateRangeIcon /> Week(s)
                  </td>
                  <td>🇫🇷 Countries</td>
                  <td>📉 Graph</td>
                </tr>
                <tr>
                  <td>🗓️ Month(s)</td>
                  <td>🗼 Cities</td>
                  <td>🗺️ Map</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '50px' }}>
              Flexible on everything but the price 🤗💰
            </div>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Who are We?</h3>
              <div>Engineers who love cheap flights</div>
              <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'content', alignSelf: 'center' }}>
                <CardContent>Scott</CardContent> <CardContent>
                  Clayton{' '}
                </CardContent>
                <CardContent>Logan</CardContent>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3>Supported Destinations</h3>
            <div>{`🌎 ${supported.length} countries and counting! ✈️`}</div>
            {tableMaker(supported)}
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3>Coming Soon!</h3>
            <div />
            {tableMaker(notSupported)}
          </CardContent>
        </Card>
      </div>;
  }
}

About.propTypes = {};

export default withStyles(styles)(About);
