/**
 *
 * TeaserCountryComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import messages from './messages'; 
import { countries, cities } from '../../../data/data';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    width: 310,
    margin: 15,
  },
  media: {
    height: 150,
  },
};
/* eslint-disable react/prefer-stateless-function */
class TeaserCountryComponent extends React.Component {
  render() {
    const {classes, city} = this.props
    console.log(city)
    //const city = cities.find(city => city.airport === flight.to_id);
    const airport = city.airport;
    const country = city.country;
    return <Card className={classes.card}>
      <CardMedia className={classes.media} image={`images/locationPhotos/${airport}.jpg`} title={country} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: 10 }}>
          <div style={{ margin: 5, alight: 'left', marginRight: 10 }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
              {country}
            </div>
          </div>
          <div style={{ margin: 10, align: 'right' }}>
            <div><button>Search</button></div>
          </div>
        </div>
      </Card>;
  }
}

TeaserCountryComponent.propTypes = {};

export default withStyles(styles)(TeaserCountryComponent);
