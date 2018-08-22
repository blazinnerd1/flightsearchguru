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
import { LOGIN } from './constants';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectUser } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { GOOGLE_CLIENT_ID } from '../../../config';
import GoogleLogin from 'react-google-login';
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
    this.handleFailure = this.handleFailure.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleSuccess(resp) {
    console.log(resp);
    this.props.login(resp);
  }

  handleFailure(resp) {
    console.log(resp);
  }

  render() {
    return (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        onSuccess={this.handleSuccess}
        onFailure={this.handleFailure}
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
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: googleResponse => dispatch({ type: LOGIN, googleResponse }),
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
