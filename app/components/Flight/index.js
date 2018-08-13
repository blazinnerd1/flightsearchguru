/**
 *
 * Flight
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Airports from '../../components/Airports';
import Price from '../../components/Price';
import ViewLink from './ViewLink';
import Date from '../../components/Date';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Flight extends React.Component {
  render() {
    const { from_id, to_id, departing, price } = this.props.flight;
    const linkDest = `https://www.kayak.com/flights/${from_id}-${to_id}/${departing}?sort=bestflight_a`;
    const airportsProps = {from_id, to_id}
    return <div style={{ display: 'flex', width: '80%', minWidth: '500px', border: '1px solid grey', backgroundColor: 'white', verticalAlign: 'center', margin: '5px', padding: '5px', justifyContent: 'center', alignItems: 'center' }}>
        <Date date={departing} />
        <Airports {...airportsProps} />
        <Price price={price} />
        <ViewLink href={linkDest}>
          <FormattedMessage {...messages.view} />
        </ViewLink>
      </div>;
  }
}

Flight.propTypes = {
  flight: PropTypes.object,
};

export default Flight;
