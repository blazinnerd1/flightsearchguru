/**
 *
 * SortByMenu
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeSelectSearchView } from 'containers/SearchResults/selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class SortByMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(val) {
    this.setState({ open: false, anchorEl: null });
    if (val) {
      this.props.handleSortChange(val);
    }
  }

  render() {
    const { sortBy, view } = this.props;
    const { open, anchorEl } = this.state;
    const disabled = view !== 'list';
    return (
      <span>
        <Button
          aria-owns={open ? 'render-props-menu' : null}
          aria-haspopup="true"
          variant="outlined"
          disabled={disabled}
          onClick={event => {
            this.setState({ open: true, anchorEl: event.currentTarget });
          }}
        >
          Sort: {sortBy}
        </Button>
        <Menu
          id="render-props-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => this.handleClose()}
        >
          <MenuItem onClick={() => this.handleClose('price')}>PRICE</MenuItem>
          <MenuItem onClick={() => this.handleClose('departure')}>
            DEPARTURE DATE
          </MenuItem>
        </Menu>
      </span>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  view: makeSelectSearchView(),
});

SortByMenu.propTypes = {};

const withConnect = connect(mapStateToProps);
export default compose(withConnect)(SortByMenu);
