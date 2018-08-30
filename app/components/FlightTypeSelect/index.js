/**
 *
 * FlightTypeSelect
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
        <Button 
          style={{ border: '' }}
          variant="outlined" className={classes.button} color="primary" aria-owns={anchorEl ? 'flightTypeMenu' : null} aria-haspopup="true" onClick={this.handleClick} title="round trip flights coming soon">
          {value.label}
        </Button>
        <Menu id="flightTypeMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          {options.map((option, i) => (
            <MenuItem
              data={JSON.stringify(option)}
              key={`flightoption_${i}`}
              onClick={this.handleClose}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
        </Label>
      </div>;
  }
}

FlightTypeSelect.propTypes = {};

export default withStyles(styles)(FlightTypeSelect);
