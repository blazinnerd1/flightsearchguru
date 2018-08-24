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

/*
anywhere|anywhere|globe
region|name
country|name|emoji
city|airportcode|cityname|airportname|countryname|region(eventually)

*/

// THIS WILL DISPLAY ON THE DROP DOWN MENU
const CustomOptions = props => {
  const { children, ...oldProps } = props;
  const newChild = oldProps.data.optionString;
  const propsToPass = { children: newChild, ...oldProps };

  return <components.Option {...propsToPass} />;
};

// THIS WILL DISPLAY AS A SELECTED OPTION
const CustomLabels = props => {
  const { data, innerProps, selectProps } = props;
  const children = data.labelObj.baseString;
  const propsToPass = { data, innerProps, selectProps, children };
  if (data.labelObj.tooltipString) {
    return (
      <span title={data.labelObj.tooltipString}>
        <components.MultiValueLabel {...propsToPass} />
      </span>
    );
  }
  return <components.MultiValueLabel {...propsToPass} />;
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
