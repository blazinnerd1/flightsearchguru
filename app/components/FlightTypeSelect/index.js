/**
 *
 * FlightTypeSelect
 *
 */

import React from 'react';
import Select, { components } from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Label from './Label'
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = {
  button: {
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white',
    '&:hover': {
      borderColor: 'blue',
      backgroundColor: 'white',
      color: 'blue'
    },
  },
};

/* eslint-disable react/prefer-stateless-function */
class FlightTypeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(e) {
    if (!this.props.isDisabled) {
      this.setState({ anchorEl: e.currentTarget });
    }
  }
  handleClose(e) {
    
    this.setState({ anchorEl: null });

    if (!this.props.isDisabled) {
      const data = JSON.parse(e.currentTarget.getAttribute('data'))
      this.props.onChange(data);
    } 
  }
  render() {
    const { anchorEl } = this.state; 
    const { options, value, classes } = this.props;
    return <div>
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
            // onChange={update}
            isDisabled
            options={options}
            value={value}
            placeholder="Select"
          />
        </span>
        </Label>
      </div>;
  }
}

FlightTypeSelect.propTypes = {};

export default withStyles(styles)(FlightTypeSelect);
