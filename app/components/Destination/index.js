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

const CustomOptions = props => {
  const { children, ...oldProps } = props;
  const newChild = children
    .split('|')
    .slice(0, 2)
    .join(' - ');
  const propsToPass = { children: newChild, ...oldProps };

  return <components.Option {...propsToPass} />;
};

const CustomLabels = props => {
  const { data, innerProps, selectProps } = props;
  const oldChild = props.children;
  const children = oldChild.slice(0, 3); // children = props.children.slice(0,3);
  const propsToPass = { data, innerProps, selectProps, children };
  return (
    <span title={oldChild.split('|')[1].trim()}>
      <components.MultiValueLabel {...propsToPass} />
    </span>
  );
};

/* eslint-disable react/prefer-stateless-function */
class Destination extends React.PureComponent {
  render() {
    const { update, options, value } = this.props;

    const customComponents = {
      MultiValueLabel: CustomLabels,
      Option: CustomOptions,
    };

    return (
      <Label>
        <FormattedMessage {...messages.header} />
        <Select
          isMulti
          onChange={update}
          components={customComponents}
          options={options}
          value={value}
        />
      </Label>
    );
  }
}

Destination.propTypes = {
  update: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.array,
};

export default Destination;
