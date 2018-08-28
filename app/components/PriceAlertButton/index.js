/**
 *
 * PriceAlertButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class PriceAlertButton extends React.Component {
  render() {
    // console.log(window.location.search)
    // const queryObj = JSON.parse(decodeURI(window.location.search).slice(7));
    // console.log(yup);
    // const { flightType, departureTimeType, departureTimes, departingAirport, destinations } = queryObj;
    
    
    // console.log('____________________------_______dfdfdf_________________________')
    // const query = window.location.search;
    // const newPath = '/pricealerts' + window.location.search;
    // console.log(newPath);
    // const hey = 
    

    return (
      <span>
        <Link to={'/pricealerts' + window.location.search}>
          <Button>Create Price Alert</Button>
        </Link>
      </span>
    );
  }
}

PriceAlertButton.propTypes = {};

export default PriceAlertButton;
