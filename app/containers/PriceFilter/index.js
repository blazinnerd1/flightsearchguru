/**
 *
 * PriceFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/lab/Slider';
import Paper from '@material-ui/core/Paper'

import messages from './messages';
import { Popover } from '@material-ui/core';

/* eslint-disable react/prefer-stateless-function */
export class PriceFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      selected:0
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleClose() {
    this.setState({ open: false, anchorEl: null });
  }

  handleSave(){
    const {selected} = this.state;
    if(selected){
      this.props.handleHighestPriceChange(selected);
    }
    this.handleClose();
  }

  handleSlider(e,selected){
    this.setState({selected})
    console.log(selected);
  }

  render() {
    const { flightPrices, highestPrice } = this.props;
    const { open, anchorEl, selected } = this.state;
    const maxAvail = Math.max(...flightPrices);
    const minAvail = Math.min(...flightPrices);
    
    const value = !selected ? maxAvail : selected;
 
    return <span>
        <Button aria-owns={open ? 'render-props-menu' : null} aria-haspopup="true" onClick={event => {
            this.setState({ open: true, anchorEl: event.currentTarget });
          }}>
          Max: {highestPrice ? `$${highestPrice}` : `$${maxAvail}`}
        </Button>
        {anchorEl && <Popover id="render-props-menu" anchorEl={anchorEl} open={open} onClose={() => this.handleClose()}>
          <Paper>
            <div style={{ width:150, height:140, textAlign:'center'}}>
            {'$'+value}
            <div style={{margin:'10px'}}><Slider value={value} min={minAvail} max={maxAvail} step={1} onChange={this.handleSlider} /></div>
            <div>{flightPrices.filter(x=>x<=value).length+' Flights'}</div>
            <Button onClick={this.handleSave}>Save</Button>
            </div>
          </Paper>
        </Popover>}
      </span>;
  }
}

PriceFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(PriceFilter);
