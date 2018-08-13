/**
 *
 * Date
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
const { format } = require('date-fns');

/* eslint-disable react/prefer-stateless-function */
class Date extends React.Component {
  render() {
    const formattedDayOfWeek = format(this.props.date, 'ddd');
    const formattedDate = format(this.props.date, 'MMM, Do');
    const formattedYear = format(this.props.date, 'YYYY');
    return (
      <div style={{ display: 'inline-block', padding: '2px', margin: 'auto' }}>
        <div style={{}}>{formattedDayOfWeek}</div>
        <div style={{ fontWeight: 'bold' }}>{formattedDate}</div>
        <div style={{ fontSize: '.8em' }}>{formattedYear}</div>
      </div>
    );
  }
}

Date.propTypes = {
  date: PropTypes.string,
};

export default Date;
