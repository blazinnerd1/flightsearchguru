/**
 *
 * FlightTypeSelect
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles ={
  button:{
    marginRight:'1px'
  }
}

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
    return <span>
      <Button variant="outlined" className={classes.button} color="primary" aria-owns={anchorEl ? 'flightTypeMenu' : null} aria-haspopup="true" onClick={this.handleClick} title="round trip flights coming soon">
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
      </span>;
  }
}

FlightTypeSelect.propTypes = {};

export default withStyles(styles)(FlightTypeSelect);
