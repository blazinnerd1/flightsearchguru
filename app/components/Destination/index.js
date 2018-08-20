/**
 *
 * Destination
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Select, { components } from 'react-select';
import Label from './Label';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const DaySelectedLabel = props => {
  // console.log('DaySelectedLabel props in Destination container', props);
  const { data, innerProps, selectProps } = props;
  const oldChild = props.children;
  const children = oldChild.slice(0, 3); // children = props.children.slice(0,3);
  const propsToPass = { data, innerProps, selectProps, children };
  return (
    <span title={oldChild.split('-')[1].trim()}>
      <components.MultiValueLabel {...propsToPass} />
    </span>
  );
};

/* eslint-disable react/prefer-stateless-function */
class Destination extends React.PureComponent {
  render() {
    const {
      update,
      destinations,
      placeholder,
      value,
      destinationType,
    } = this.props;

    let customComponents = {};
    if (destinationType === 'city(s)') {
      customComponents = { MultiValueLabel: DaySelectedLabel };
      console.log('customComponents in Destination container: ', customComponents);
    }

    if (destinationType === 'anywhere') {
      return (
        <Label>
          <FormattedMessage {...messages.header} />
          <Select options={destinations} placeholder={"To anywhere"} />
        </Label>
      )
    }

    return (
      <Label>
        <FormattedMessage {...messages.header} />
        <Select
          isMulti
          onChange={update}
          components={customComponents}
          options={destinations}
          placeholder={placeholder}
          value={value}
        />
      </Label>
    );
  }
}

Destination.propTypes = {
  update: PropTypes.func,
  destinations: PropTypes.array,
  placeholder: PropTypes.string,
  destinationType: PropTypes.string,
  value: PropTypes.array,
};

export default Destination;
