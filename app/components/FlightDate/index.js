/**
 *
 * Date
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
const { format } = require('date-fns');

/* eslint-disable react/prefer-stateless-function */
class FlightDate extends React.Component {
  render() {
    const { date } = this.props;
    const utcdate = date
      .split(' ')
      .slice(0, 5)
      .join(' ');
    const formattedDayOfWeek = format(utcdate, 'ddd');
    const formattedDate = format(utcdate, 'M/D');
    const formattedYear = format(utcdate, 'YYYY');
    return (
      <Typography>
        <div style={{}}>{formattedDayOfWeek}</div>
        <div style={{ fontWeight: 'bold' }}>{formattedDate}</div>
        <div style={{ fontSize: '.8em' }}>{formattedYear}</div>
      </Typography>
    );
  }
}

FlightDate.propTypes = {
  date: PropTypes.string,
};

export default FlightDate;
