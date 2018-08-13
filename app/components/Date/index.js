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
    const formatted = format(this.props.date, 'ddd, MMM Do YYYY');
    return (
      <div
        style={{
          display: 'inline-block',
          padding: '2px',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>{formatted}</span>
      </div>
    );
  }
}

Date.propTypes = {
  date: PropTypes.string,
};

export default Date;
