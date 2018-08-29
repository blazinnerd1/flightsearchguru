/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { LOGIN, VERIFY_USER, LOGOUT } from './constants';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUser, makeSelectSessionId } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { GOOGLE_CLIENT_ID } from '../../../config';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import styled from 'styled-components';
/* eslint-disable react/prefer-stateless-function */

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.handleLogoutSuccess = this.handleLogoutSuccess.bind(this);
    const { session_id } = props;
    this.state = {
      session_id,
    };
  }

  componentDidMount() {
    // hydrate with saved session if it exists
    const session_id = localStorage.getItem('session_id');

    // // USED FOR DEV TESTING
    // const session_id = '12345678';

    if (session_id && session_id !== 'undefined') {
      this.props.verify(session_id);
      this.setState({ session_id });
    }

    // on window close, store session if it exists
    window.addEventListener('beforeunload', () => {
      if (this.props.session_id) {
        localStorage.setItem('session_id', this.props.session_id);
      }
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const oldid = prevProps.session_id;
    const newid = this.props.session_id;
    if (oldid !== newid) {
      this.setState({ session_id: newid });
    }
  }

  handleLoginSuccess(resp) {
    this.props.login(resp);
  }

  handleLoginFailure(resp) {
    console.log('login failure', resp);
  }

  handleLogoutSuccess() {
    localStorage.setItem('session_id', undefined);
    this.setState({ session_id: false });
    this.props.logout();
  }

  render() {
    if (this.state.session_id) {
      return (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          onLogoutSuccess={this.handleLogoutSuccess}
          style={{ fontColor: 'black' }}
        >
          <img width="23px" height="23px" src="images/googleIcon.png" />
          <span style={{ color: 'black' }}>Logout</span>
        </GoogleLogout>
      );
    }
    return (
      // wrapped GoogleLogin in div to assign an id
      // id used PriceAlert container index.js
        // if user is not logged in, div is auto-clicked to open google login window
      <div id="googleloginbutton" style={{display: "inline-block"}}>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          onSuccess={this.handleLoginSuccess}
          onFailure={this.handleLoginFailure}
          style={{ fontColor: 'black' }}
        >
          <img width="23px" height="23px" src="images/googleIcon.png" />
          <span style={{ color: 'black' }}>Login</span>
        </GoogleLogin>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  session_id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  session_id: makeSelectSessionId(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: googleResponse =>
      dispatch({
        type: LOGIN,
        googleResponse,
      }),
    verify: session_id =>
      dispatch({
        type: VERIFY_USER,
        session_id,
      }),
    logout: () => dispatch({ type: LOGOUT }),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
