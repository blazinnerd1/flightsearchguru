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
          <td>{row.country}</td>
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
    return (
      <div>
        <h3>Supported Destinations</h3>
        {tableMaker(supported)}
        <h3>Not (Yet) Supported Destinations</h3>
        {tableMaker(notSupported)}
      </div>
    );
  }
}

About.propTypes = {};

export default About;
