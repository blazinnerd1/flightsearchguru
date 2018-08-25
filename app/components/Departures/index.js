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
    const { update, options, value } = this.props;
    const customComponents = {
      SingleValue: CustomLabels,
      Option: CustomOptions,
    };
    return (
      <Label>
        <FormattedMessage {...messages.header} />
        <Select
          components={customComponents}
          onChange={update}
          options={options}
          value={value}
          placeholder="Select"
        />
      </Label>
    );
  }
}

Departures.propTypes = {
  update: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.object,
};

export default Departures;
