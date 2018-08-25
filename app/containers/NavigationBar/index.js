/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Login from 'containers/Login';
import HelpIcon from '@material-ui/icons/HelpOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import injectReducer from 'utils/injectReducer';
import makeSelectMenu from './selectors';
import reducer from './reducer';
import messages from './messages';
import {
  IconButton,
  Toolbar,
  Switch,
  FormControlLabel,
  AppBar,
  FormGroup,
  Typography,
  MenuItem,
  Menu,
} from '@material-ui/core';

const styles = {
  flex: {
    flexGrow: 1,
  },
  appbar: {
    width: '100%',
    boxShadow: 'none',
    backgroundColor: 'white',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
/* eslint-disable react/prefer-stateless-function */
export class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event, checked) {
    this.setState({ auth: checked });
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="black"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="black" className={classes.flex}>
            <FormattedMessage {...messages.header} />
          </Typography>
          <div>
            <Login />
          </div>
          {auth && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="black"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          <div>
            <Link to="/about">
              <IconButton // aria-owns={open ? 'menu-appbar' : null}
                // aria-haspopup="true"
                // onClick={this.handleMenu}
                color="black"
              >
                <HelpIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

NavigationBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  menu: makeSelectMenu(),
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

const withReducer = injectReducer({ key: 'navigationbar', reducer });

export default withStyles(styles)(
  compose(
    withReducer,
    withConnect,
  )(NavigationBar),
);
