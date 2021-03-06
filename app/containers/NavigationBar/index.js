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
import Login from 'containers/Login';
import HelpIcon from '@material-ui/icons/HelpOutlined';
//import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import injectReducer from 'utils/injectReducer';
import makeSelectMenu from './selectors';
import { makeSelectUser, makeSelectSessionId} from '../Login/selectors';
import reducer from './reducer';
import styled from 'styled-components';
import messages from './messages';
import {
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  MenuItem,
  Menu,
} from '@material-ui/core';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
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
    const {session_id} = props
    this.state = {
      anchorEl: null,
      session_id
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      this.setState({anchorEl:null})
    }
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes, user, session_id } = this.props;
    const {  anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const session_id2 = localStorage.getItem('session_id' );
    console.log('------------------------------------------------')
    console.log(session_id2, 'from storage');
    console.log(session_id,'from state')
    console.log(user);
    const userIsLoggedIn = typeof session_id ==='string' && !(session_id==='undefined' || session_id==='');
    console.log(typeof session_id)
    console.log(session_id==='undefined')
    console.log(session_id==='')
    console.log('user is logged in', userIsLoggedIn)
    let menu;
    if (!userIsLoggedIn) {
      menu = <div><Login /></div>;
    } else {
      menu = (
        <div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="black"
          >
            <img width="30px" height="30px" src={`${user.picture}`} style={{ borderRadius:"50%"}} />
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <MenuItem onClick={this.handleClose} justify="center">Profile</MenuItem>
            </div>
            
            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <MenuItem onClick={this.handleClose}>My price alerts</MenuItem>
            </div> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
              <MenuItem onClick={this.handleClose}><Login /></MenuItem>
            </div>
          </Menu>
        </div>
      );
    }

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
                <Link to="/">
                  <img
                    style={{ width: 'auto', maxWidth: '80%', maxHeight: '40px' }}
                    src="/images/LOGO_BANNER.png"
                  />
                </Link>
              </Typography>
              {menu}
              <div>
                <Link to="/about">
                  <IconButton color="black" >
                    <HelpIcon style={{ width:'30px', height:'30px' }}/>
                  </IconButton>
                </Link>
              </div>
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
  session_id: makeSelectSessionId(),
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
