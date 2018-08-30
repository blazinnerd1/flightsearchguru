/**
 *
 * Flight
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 300,
    margin: 15,
  },
};

/* eslint-disable react/prefer-stateless-function */
function Stops(props) {
  const { stops } = props;

  let stopString = 'Non-Stop';
  let airportsList = '';

  if (stops.length > 0) {
    stopString = `${stops.length} Stop`;
    airportsList = stops.join(', ');

    if (stops.length > 1) {
      stopString += 's';
    }
  }

  return (
    <div>
      <div style={{ fontSize: '.8em' }}>{stopString}</div>
      <div style={{ fontWeight: 'lighter', fontSize: '.6em' }}>
        {airportsList}
      </div>
    </div>
  );
}

Stops.propTypes = {
  flight: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Stops);
