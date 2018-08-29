/**
 *
 * SortByMenu
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class SortByMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open:false,
      anchorEl: null
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(val){
    this.setState({open:false, anchorEl:null})
    if(val){
      this.props.handleSortChange(val);
    }
  }

  render() {
    const {sortBy} = this.props;
    const {open, anchorEl} = this.state;
    return (
      <span>
        <Button
          aria-owns={open ? 'render-props-menu' : null}
          aria-haspopup="true"
          onClick={event => {
            this.setState({open:true, anchorEl:event.currentTarget});
          }}
        >
          Sort: {sortBy}
        </Button>
        <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={()=>this.handleClose()}>
          <MenuItem onClick={()=>this.handleClose('cheapest')}>PRICE</MenuItem>
          <MenuItem onClick={()=>this.handleClose('departure')}>DEPARTURE</MenuItem>
        </Menu>
      </span>
    );
  }
}

SortByMenu.propTypes = {};

export default SortByMenu;
