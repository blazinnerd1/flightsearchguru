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
    // return (
    //   <span>
    //     <Link to={'/pricealerts' + window.location.search} style={{ textDecoration:'none' }}>
    //       <Button>Create Price Alert</Button>
    //     </Link>
    //   </span>
    // );
  

    return <span>
        <Button component={Link} to={`/pricealerts${window.location.search}`} variant="outlined">
          Create Price Alert
        </Button>
      </span>;
  }
}

PriceAlertButton.propTypes = {};

export default PriceAlertButton;
