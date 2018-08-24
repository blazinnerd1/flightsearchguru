/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import SearchResults from '../SearchResults';
import CenteredSection from './CenteredSection';
import SearchBar from '../SearchBar';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    console.log('parsed queryString in HomePage container', parsed);
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Search</title>
          <meta name="description" content="Search page of hergin derginn" />
        </Helmet>
        <div>
          <CenteredSection>
            <SearchBar />
            <SearchResults />
          </CenteredSection>
        </div>
      </article>
    );
  }
}

export default HomePage;
