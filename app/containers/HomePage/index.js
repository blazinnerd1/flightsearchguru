/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import SearchResults from '../SearchResults';
import CenteredSection from './CenteredSection';
import SearchBar from '../SearchBar';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const location = this.props.location;
    return (
      <article>
        <Helmet>
          <title>Search</title>
          <meta name="description" content="Search page of hergin derginn" />
        </Helmet>

        <CenteredSection>
          <SearchBar location={location} />
          <SearchResults location={location} />
        </CenteredSection>
      </article>
    );
  }
}

export default HomePage;
