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
  <table>
    <thead style={{ fontWeight: 'bold' }}>
      <tr>
        <th>Country</th>
        <th>City</th>
        <th>Airport</th>
      </tr>
    </thead>
    <tbody>
      {countries.map(row => (
        <tr key={`supp_${row.airport_id}`}>
          <td>{`${row.emoji} ${row.country}`}</td>
          <td>{row.city}</td>
          <td>
            {row.airport_id} - {row.airport_name}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
class About extends React.Component {
  render() {
    return <Paper>
        <div style={{ textAlign: 'center' }}>
          <Card margin="20">
            <CardContent>
              <h2>
                Flights to the Carribean or Bali departing in the next four
                weekends
              </h2>
              <div>Try that search with the other guys!</div>
              <div>Find the cheapest flights in miliseconds ⏱️🔥</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3>World's #1 Flight Exploration Engine</h3>
              <div>Mix and Match</div>
              <div>Flexiable Departures</div>
              <div style={{ display: 'flex' }}>
                <div>
                  ☀️ Day(s)<div />
                  <DateRangeIcon /> Week(s)<div />🗓️ Month(s)
                </div>
              </div>
              <div>Flexiable Destinations</div>
              <div>
                Search any combination of regions 🇪🇺, countries🇫🇷, or
                cities🗼
              </div>
              <div>Flexiable Results</div>
              <div>
                Easily sort and filter your results as a list📇, graph📉, or
                map 🗺️
              </div>
              <div>Always Cheap! 🤗💰</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3>Who are We?</h3>
              <div>Engineers who love to travel</div>
              <div>Scott Clayton Logan</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3>Supported Destinations</h3>
              <div>{`🌎 ${supported.length} countries and counting! ✈️`}</div>
              {tableMaker(supported)}
            </CardContent>
          </Card> <Card>
            <CardContent>
              <h3>Coming Soon!</h3>
              {tableMaker(notSupported)}
            </CardContent>
          </Card>
        </div>
      </Paper>;
  }
}

About.propTypes = {};

export default About;
