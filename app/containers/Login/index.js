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
/* eslint-disable react/prefer-stateless-function */

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleFailure = this.handleFailure.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleSuccess(resp) {
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
        <img
          style={{ width: '150px' }}
          src="images/btn_google_signin_light_normal_web@2x.png"
          alt="Login with Google"
        />
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
