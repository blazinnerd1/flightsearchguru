/**
 *
 * FilterDestinationsMenuDropdown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import injectReducer from 'utils/injectReducer';
import makeSelectFilterDestinationsMenuDropdown from './selectors';
import reducer from './reducer';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FilterDestinationsMenuDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, anchorEl: null };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(val) {
    if (val) {
      this.props.handleDestExcludeChange(val);
    } else {
      this.setState({ open: false, anchorEl: null });
    }
  }

  render() {
    const { destinations, excludeDestinations } = this.props;
    const { open, anchorEl } = this.state;
    return (
      <span>
        <Button
          aria-owns={open ? 'render-props-menu' : null}
          aria-haspopup="true"
          onClick={event => {
            this.setState({
              open: true,
              anchorEl: event.currentTarget,
            });
          }}
        >
          Destinations
        </Button>
        <Menu
          id="render-props-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => this.handleClose()}
        >
          {destinations.map(destination => {
            let str = destination;
            if (!excludeDestinations.includes(destination)) {
              str += ' ✓';
            }
            return (
              <MenuItem onClick={() => this.handleClose(destination)}>
                {str}
              </MenuItem>
            );
          })}
        </Menu>
      </span>
    );
  }
}

FilterDestinationsMenuDropdown.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  filterdestinationsmenudropdown: makeSelectFilterDestinationsMenuDropdown(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'filterDestinationsMenuDropdown',
  reducer,
});

export default compose(
  withReducer,
  withConnect,
)(FilterDestinationsMenuDropdown);
