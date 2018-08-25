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
import FlightDate from 'components/FlightDate';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import datefns from 'date-fns';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Stops from 'components/Stops';
import { CardActions } from '@material-ui/core';
import KayakLink from '../KayakLink';

const styles = {
  card: {
    minWidth: 400,
    margin: 10,
    display: 'inline-block',
  },
};

/* eslint-disable react/prefer-stateless-function */
function Flight(props) {
  const {
    from_id,
    to_id,
    departing,
    price,
    stops,
    carrier,
    city,
    country,
    airport,
    logoUrl,
    onlyOneCarrier,
  } = props.flight;
  const { classes } = props;

  const airportsProps = { city, country, airport };

  const logoProps = { logoUrl, carrier, from_id, to_id, onlyOneCarrier };
  return (
    <Card className={classes.card}>
      <CardActions>
        <Logo {...logoProps} />
        <FlightDate date={utcdate} />
        <Airports {...airportsProps} />
        <Stops stops={stops} />
        <div>
          <Price price={price} />
          <KayakLink from_id={from_id} to_id={to_id} departing={departing} />
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
