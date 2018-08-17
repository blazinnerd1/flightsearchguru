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
import DateComponent from '../../components/Date';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import datefns from 'date-fns';



/* eslint-disable react/prefer-stateless-function */
class Flight extends React.Component {
  render() {
    const { from_id, to_id, departing, price, carriers, stops, arrivetime } = this.props.flight;
    const departureDate = datefns.format(departing, 'YYYY-MM-DD');
    const linkDest = `https://www.kayak.com/flights/${from_id}-${to_id}/${departureDate}?sort=price_a`;
    const airportsProps = {from_id, to_id}
    const logoProps = {carriers, stops, departing, arrivetime}
    
    return <div style={{ display: 'flex', minWidth: '500px', border: '1px solid grey', backgroundColor: 'white', height:'130px', verticalAlign: 'center', margin: '5px', padding: '10px', paddingBottom:'15px', justifyContent: 'center', alignItems: 'center' }}>
      <Logo {...logoProps} />
        <DateComponent date={departing} />
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
