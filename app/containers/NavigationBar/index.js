/**
 *
 * NavigationBar
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
import { makeSelectUser } from '../Login/selectors';
import reducer from './reducer';
import styled from 'styled-components';
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
const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const styles = {
  flex: {
    flexGrow: 1,
  },
  fullwidth: {
    width: '100vp',
    backgroundColor: 'white',
  },
  appbar: {
    boxShadow: 'none',
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: 5,
  },
};
/* eslint-disable react/prefer-stateless-function */
export class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    const { user } = props;
    this.state = {
      user,
      anchorEl: null,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;
    const { user, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const session_id = localStorage.getItem('session_id');
    console.log('------------------------------------------------')
    console.log(session_id);

    return (
      <div className={classes.fullwidth}>
        <AppWrapper>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar>
              <Typography
                variant="title"
                color="black"
                className={classes.flex}
              >
                <Link to="/" style={{}}>
                  <FormattedMessage {...messages.header} />
                </Link>
              </Typography>
              {!user && (
                <div>
                  <Login />
                </div>
              )}
              {user && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="black"
                  >
                    <img width="23px" height="23px" src={user.picture} />
                    {/* <AccountCircle /> */}
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose} justify="center">Profile</MenuItem>
                    {/* <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>My price alerts</MenuItem>                     */}
                    <MenuItem><Login /></MenuItem>
                  </Menu>
                </div>
              )}
              <div>
                <Link to="/about">
                  <IconButton color="black" >
                    <HelpIcon />
                  </IconButton>
                </Link>
              </div>
              <IconButton
                className={classes.menuButton}
                color="black"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </AppWrapper>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  menu: makeSelectMenu(),
  user: makeSelectUser(),
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
