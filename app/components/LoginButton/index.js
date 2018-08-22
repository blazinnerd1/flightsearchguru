import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
  console.log(response);
};

function LoginButton() {
  return (
    <GoogleLogin
      clientId="105406662768-dv11pir7jihm1s84o7ovvd3rfp09g7pt.apps.googleusercontent.com"
      buttonText="Sign In/Up"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
}

export default LoginButton;
