/**
 *
 * SplashPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { countries, cities } from '../../../data/data';
import messages from './messages';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import KayakLink from 'components/KayakLink';
import {
  CardContent,
  CardActions,
  Typography,
  CardHeader,
} from '@material-ui/core';

const styles = {
  card: {
    width: 310,
    margin: 15,
  },
  content: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  actions: {
    paddingTop: 0,
    paddingBottom: 0,
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
      <CardContent className={classes.content}>
        <CardActions className={classes.actions}>
          <Typography style={{ margin: 5 }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
              {city.name}
            </div>
            <div>{country.name}</div>
          </Typography>
          <Typography
            style={{ fontWeight: 'bold', fontSize: '1.5em', margin: 5 }}
          >
            ${flight.price}+
          </Typography>
          <Typography style={{ align: 'right', margin: 5 }}>
            <KayakLink {...flight} />
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
}

TeaserFlight.propTypes = {
  flight: PropTypes.object,
};
export default withStyles(styles)(TeaserFlight);
