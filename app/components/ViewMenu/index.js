/**
 *
 * ViewMenu
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectSearchView } from 'containers/SearchResults/selectors';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { changeView } from 'containers/SearchResults/actions';
/* eslint-disable react/prefer-stateless-function */
class ViewMenu extends React.Component {
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
      this.props.updateView(val);
    }
  }

  render() {
    const { view } = this.props;
    const { open, anchorEl } = this.state;
    return (
      <span>
          <Button
                    variant="outlined"
          aria-owns={open ? 'render-props-menu' : null}
          aria-haspopup="true"
          onClick={event => {
                this.setState({ open: true, anchorEl: event.currentTarget });
          }}
        >
          View: {view}
          </Button>
          <Menu
          id="render-props-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => this.handleClose()}
        >
            <MenuItem onClick={() => this.handleClose('list')}>LIST</MenuItem>
            <MenuItem onClick={() => this.handleClose('map')}>MAP</MenuItem>
            <MenuItem onClick={() => this.handleClose('graph')}>GRAPH</MenuItem>
          </Menu>
        </span>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  view: makeSelectSearchView(),
});

ViewMenu.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    updateView: newView => dispatch(changeView(newView)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(ViewMenu);
