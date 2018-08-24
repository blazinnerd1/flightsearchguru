import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Login from 'containers/Login';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <Login />
        </NavBar>
      </div>
    );
  }
}

export default Header;
