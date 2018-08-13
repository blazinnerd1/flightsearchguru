/**
 *
 * Airport
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Airport extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'inline-block',
          padding: '2px',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>{this.props.code}</span>
      </div>
    );
  }
}

Airport.propTypes = {
  code: PropTypes.string,
};

export default Airport;
