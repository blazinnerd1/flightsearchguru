/**
 *
 * Departures
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Select, { components } from 'react-select';
import Label from './Label';

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
        <span>
          <FormattedMessage {...messages.header} />
        </span>
        <span
          style={{
            color: 'black',
            fontWeight: 'normal'
          }}
        >
          <Select
            components={customComponents}
            onChange={update}
            options={options}
            value={value}
            placeholder="Select"
          />
        </span>
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
