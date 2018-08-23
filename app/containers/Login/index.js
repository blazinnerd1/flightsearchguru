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

const LoginImage = styled.button`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

const LogoutImage = styled.img``;

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
  }

  componentDidMount() {
    // hydrate with saved session if it exists
    console.log('hydrating', localStorage.getItem('session_id'));
    if (localStorage.hasOwnProperty('session_id')) {
      this.props.verify(localStorage.getItem('session_id'));
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
      console.log(oldid, newid);
    }
  }

  handleLoginSuccess(resp) {
    this.props.login(resp);
  }

  handleLoginFailure(resp) {
    console.log(resp);
  }

  handleLogoutSuccess() {
    this.props.logout();
  }

  handleLogoutFailure(resp) {
    console.log(resp);
  }

  render() {
    console.log(this.props.session_id);
    if (this.props.session_id) {
      return (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          onSuccess={this.handleLogoutSuccess}
          onFailure={this.handleLogoutFailure}
          style={{}}
        >
          <LoginImage>
            <img width="23px" height="23px" src="images/googleIcon.png" />Logout
          </LoginImage>
        </GoogleLogout>
      );
    }
    return (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        onSuccess={this.handleLoginSuccess}
        onFailure={this.handleLoginFailure}
        style={{}}
      >
        <LoginImage>
          <img width="23px" height="23px" src="images/googleIcon.png" />Login
        </LoginImage>
      </GoogleLogin>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  session_id: PropTypes.string,
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
