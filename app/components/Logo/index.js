/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AirplaneIcon from '../AirplaneIcon';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Logo extends React.Component {
  render() {
    return (
      <div>
        <AirplaneIcon />
        <div>{this.props.info}</div>
      </div>
    );
  }
}

Logo.propTypes = {
  info: PropTypes.string,
};

export default Logo;
