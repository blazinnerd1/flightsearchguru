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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DateRangeIcon from '@material-ui/icons/DateRange';
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
          <th><FormattedMessage {...messages.country} /></th>
          <th><FormattedMessage {...messages.city} /></th>
          <th style={{textAlign:'right'}}><FormattedMessage {...messages.airport} /></th>
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

const profilePic = (githubusername, name)=>{

  return <div>
    <a style={{ color:'black', textDecoration: 'none'}} href={`http://github.com/${githubusername}`}>
      <img style={{ width: '70px', height: '70px', borderRadius: '50%', boxShadow: `0 5px 5px 0 rgba(0,0,0,0.2), 0 0 0 2px rgba(0,0,0,0.15)` }} src={`http://github.com/${githubusername}.png`} /> <h3
        >
          {name}
        </h3>
      </a>
    </div>;

}
class About extends React.Component {
  render() {
    const {classes} = this.props;
    return <div style={{ textAlign: 'center', backgroundColor: '#fafafa', paddingTop: '30px' }}>
        <Card className={classes.card}>
          <CardContent>
            <h2><FormattedMessage {...messages.tagline} /></h2>
          <div style={{ display: 'table', margin: '0 auto', textAlign: 'middle', verticalAlign: 'middle', height: '50px', boxShadow: `0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)` }}><div style={{ display: 'table cell', margin: '10px' }}>
              <span><FormattedMessage {...messages.teaserSearch} /></span>
              <span style={{  verticalAlign: 'middle', color: '#4285f4', position: 'relative', right: '0' }}>
              <svg style={{ right: '0', height: '24px', width: '24px', margin: '5px' }} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </span>
              </div>
            </div>
            <div style={{ marginTop: '50px' }}><FormattedMessage {...messages.diss} /></div>
            <div style={{ marginTop: '20px' }}><FormattedMessage {...messages.brag} /></div>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3><FormattedMessage {...messages.weAreNumberOne} /></h3>
            <div style={{ marginBottom: '30px' }}><FormattedMessage {...messages.mixAndMatch} /></div>
            <table style={{ width: '100%' }}>
              <thead style={{ fontWeight: 'bold' }}>
                <tr>
                  <th><FormattedMessage {...messages.departures} /></th>
                  <th><FormattedMessage {...messages.destinations} /></th>
                  <th><FormattedMessage {...messages.results} /></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FormattedMessage {...messages.days} /></td>
                  <td><FormattedMessage {...messages.regions} /></td>
                  <td><FormattedMessage {...messages.list} /></td>
                </tr>
                <tr>
                  <td>
                    <DateRangeIcon /> <FormattedMessage {...messages.weeks} />
                  </td>
                  <td><FormattedMessage {...messages.countries} /></td>
                  <td><FormattedMessage {...messages.graph} /></td>
                </tr>
                <tr>
                  <td><FormattedMessage {...messages.months} /></td>
                  <td><FormattedMessage {...messages.cities} /></td>
                  <td><FormattedMessage {...messages.map} /></td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '50px' }}>
            <FormattedMessage {...messages.flexibility} />
            </div>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3><FormattedMessage {...messages.whoAreWeQuestion} /></h3>
              <div><FormattedMessage {...messages.whoAreWeAnswer} /></div>
              <table style={{ marginTop:'30px' }}><tr>
                <td>
                {profilePic('clayton-lin', 'Clayton')}
                </td> <td>
                  {profilePic('scott-grimes', 'Scott')}
                </td>
                <td>{profilePic('cosmere', 'Logan')}</td></tr>
              </table>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3><FormattedMessage {...messages.supportedDestinations} /></h3>
            <div style={{marginBottom:'40px'}}>{`🌎 ${supported.length} `}<FormattedMessage {...messages.countryCount} />
            </div>
            {tableMaker(supported)}
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3><FormattedMessage {...messages.comingSoon} /></h3>
            <div />
            {tableMaker(notSupported)}
          </CardContent>
        </Card>
      </div>;
  }
}

About.propTypes = {};

export default withStyles(styles)(About);
