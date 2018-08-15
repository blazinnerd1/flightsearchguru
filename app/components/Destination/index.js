/**
 *
 * Destination
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Select from 'react-select';
import Label from './Label'

import { FormattedMessage } from 'react-intl';
import messages from './messages';


/* eslint-disable react/prefer-stateless-function */
class Destination extends React.PureComponent {
  render() {
    const { update, destinations, placeholder, metadest } = this.props;

    return (
      <Label>
        <FormattedMessage {...messages.header} />
        <Select
          onChange={update}
          options={destinations}
          placeholder={placeholder}
        />
      </Label>
    );
  }
}

Destination.propTypes = {
  update: PropTypes.func,
  destinations: PropTypes.array,
  placeholder: PropTypes.string,
  metadest: PropTypes.string,
};

export default Destination;
