/**
 *
 * PriceFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { makeSelectSearchView } from 'containers/SearchResults/selectors';
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
  }

  render() {
    
    const { flightPrices, highestPrice, view } = this.props;
    const { open, anchorEl, selected } = this.state;
    const justprices = flightPrices.map(x=>x.price)
    const maxAvail = Math.max(...justprices);
    const minAvail = Math.min(...justprices);
    const disabled = view ==='graph';

    console.log(disabled,view);

    const value = !selected ? maxAvail : selected;
    const flightsMeetingFilter = flightPrices.filter(x => x.price <= value)
    const destinationsMeetingFilter = Array.from(new Set(flightsMeetingFilter.map(x=>x.to_id)));
    return <span>
      <Button disabled={disabled} variant="outlined" aria-owns={open ? 'render-props-menu' : null} aria-haspopup="true" onClick={event => {
            this.setState({ open: true, anchorEl: event.currentTarget });
          }}>
          Max: {highestPrice ? `$${highestPrice}` : `$${maxAvail}`}
        </Button>
        {anchorEl && <Popover id="render-props-menu" anchorEl={anchorEl} open={open} onClose={() => this.handleClose()}>
            <Paper>
              <div style={{ width: 150, height: 180, textAlign: 'center' }}>
                {'$' + value}
                <div style={{ margin: '10px' }}>
                  <Slider value={value} min={minAvail} max={maxAvail} step={1} onChange={this.handleSlider} />
                </div>
                <div>{flightsMeetingFilter.length + ' Flights'}</div>
                <div>{destinationsMeetingFilter.length+ ' Cities'}</div>
                <Button onClick={this.handleSave} variant="outlined">Save</Button>
              </div>
            </Paper>
          </Popover>}
      </span>;
  }
}


const mapStateToProps = createStructuredSelector({
  view: makeSelectSearchView(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PriceFilter);
