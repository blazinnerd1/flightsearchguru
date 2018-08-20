/**
 *
 * Departures
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Select, { components } from 'react-select';
import Label from './Label';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// const SingleValue = ({ children, ...props }) => (
//   <components.SingleValue {...props}>
//     <span title={children.split('-')[1].trim()}>
//       {children.split('-')[0].trim()}
//     </span>
//   </components.SingleValue>
// );

/* eslint-disable react/prefer-stateless-function */
class Departures extends React.Component {
  render() {
    const { update, departures } = this.props;

    return (
      <Label>
        <FormattedMessage {...messages.header} />
        <Select onChange={update} options={departures} placeholder="Select" />
      </Label>
    );
  }
}

Departures.propTypes = {
  update: PropTypes.func,
  departures: PropTypes.array,
};

export default Departures;
