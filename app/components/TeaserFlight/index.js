/**
 *
 * SplashPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { countries, cities } from '../../../data/data';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import KayakLink from 'components/KayakLink';

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
function TeaserFlight(props) {
  const { classes, flight } = props;
  const city = cities.find(city => city.airport === flight.to_id);
  const country = countries.find(country => country.id === city.id_countries);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={`images/locationPhotos/${flight.to_id}.jpg`}
        title={country.name}
      />
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center',
          margin:'auto',
          marginTop:10
        }}>
          <div style={{ margin: 5, alight:'left' , marginRight:10}}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
              {city.name}
            </div>
            <div>{country.name}</div>
          </div>
          <div style={{margin: 10, align:'right'}} >
            <div
              style={{ fontWeight: 'bold', fontSize: '1.5em', }}
            >
              ${flight.price}+
            </div>
            <div >
              <KayakLink {...flight} />
            </div>
          </div>
        </div>
      
    </Card>
  );
}

TeaserFlight.propTypes = {
  flight: PropTypes.object,
};
export default withStyles(styles)(TeaserFlight);
