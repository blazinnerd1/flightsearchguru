/**
 *
 * Flight
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Airports from 'components/Airports';
import Price from 'components/Price';
import Logo from 'components/Logo';
import ViewLink from './ViewLink';
import FlightDate from 'components/FlightDate';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import datefns from 'date-fns';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Stops from 'components/Stops';
import { airlines } from '../../../data/data';
import { CardActions } from '@material-ui/core';

const styles = {
  card: {
    minWidth: 400,
    margin: 10,
    display: 'inline-block',
  },
};

const getPrimaryCarrier = carriers => {
  if (carriers.length === 1) return carriers[0];

  // object with carrier:count
  const carriersCounts = carriers.reduce((m, x) => {
    if (!m[x]) {
      m[x] = 0;
    }
    m[x]++;
    return m;
  }, {});

  // array of carrier occurances
  const counts = Object.values(carriersCounts);

  // count of max segments
  const max = Math.max(...counts);
  // does only one carrier have the max segments
  const isOnlyMax = counts.indexOf(max) === counts.lastIndexOf(max);
  if (!isOnlyMax) {
    return carriers[Math.floor(Math.random() * carriers.length)]; // no carrier is dominant, return nothing
  }
  // return the carrier with the most segments
  return Object.keys(carriersCounts).find(key => carriersCounts[key] === max);
};

const getLogoOf = carrier => {
  // if we were given the full carrier name, replace it with the 2-letter carrier code
  // if unable to find carrier, return an empty string

  if (carrier.length > 2) {
    carrier = Object.keys(airlines).find(key => airlines[key] === carrier);
    // if the carrier was not in our list, set carrier to ''
    carrier = carrier === undefined ? '' : carrier;
  } else if (carrier !== '') {
    carrier = Object.keys(airlines).includes(carrier) ? carrier : '';
  }

  console.log(carrier);
  return carrier === '' ? 'none' : `/images/airlines/${carrier}.png`;
};

/* eslint-disable react/prefer-stateless-function */
function Flight(props) {
  console.log(props);
  const {
    from_id,
    to_id,
    departing,
    price,
    carriers,
    stops,
    arrivetime,
  } = props.flight;
  const { classes } = props;
  const utcdate = departing
    .split(' ')
    .slice(0, 5)
    .join(' ');
  const departureDate = datefns.format(utcdate, 'YYYY-MM-DD');
  const linkDest = `https://www.kayak.com/flights/${from_id}-${to_id}/${departureDate}?sort=price_a`;
  const airportsProps = { from_id, to_id };

  const carrier = getPrimaryCarrier(carriers);
  const logourl = getLogoOf(carrier);
  const logoProps = { logourl, carrier, from_id, to_id };
  return (
    <Card className={classes.card}>
      <CardActions>
        <Logo {...logoProps} />
        <FlightDate date={utcdate} />
        <Airports {...airportsProps} />
        <Stops stops={stops} />
        <div>
          <Price price={price} />
          <ViewLink href={linkDest} target="_blank">
            <FormattedMessage {...messages.view} />
          </ViewLink>
        </div>
      </CardActions>
    </Card>
  );
}

Flight.propTypes = {
  flight: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Flight);
