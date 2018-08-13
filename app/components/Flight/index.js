/**
 *
 * Flight
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Airport from '../../components/Airport';
import Price from '../../components/Price';
import Date from '../../components/Date';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Flight extends React.Component {
  render() {
    const { from_id, to_id, departing, price } = this.props.flight;
    console.log(this.props.flight);
    return (
      <div
        style={{
          width: '80%',
          float: 'center',
          border: '1px solid grey',
          backgroundColor: 'white',
          margin: '0 auto',
          padding: '20px',
        }}
      >
      <div style={{ display: 'inline-block' }}>
        <Date date={departing} />
        <Airport code={from_id} />
        <Airport code={to_id} />
        <Price price={price} />
      </div>
    </div>
    );
  }
}

Flight.propTypes = {
  flight: PropTypes.object,
};

export default Flight;
