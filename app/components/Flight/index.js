/**
 *
 * Flight
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Airports from '../../components/Airports';
import Price from '../../components/Price';
import Logo from '../../components/Logo';
import ViewLink from './ViewLink';
import Date from '../../components/Date';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Flight extends React.Component {
  render() {
    const { from_id, to_id, departing, price, info } = this.props.flight;
    const linkDest = `https://www.kayak.com/flights/${from_id}-${to_id}/${departing}?sort=price_a`;
    const airportsProps = {from_id, to_id}
    return <div style={{ display: 'flex', minWidth: '500px', border: '1px solid grey', backgroundColor: 'white', height:'120px', verticalAlign: 'center', margin: '5px', padding: '5px', justifyContent: 'center', alignItems: 'center' }}>
        <Logo info={info} />
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
