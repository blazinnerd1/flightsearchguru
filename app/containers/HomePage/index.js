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
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

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
        <SearchBar location={location} />
          <AppWrapper>
            <div style={{backgroundColor:'white', paddingTop:'30px'}}>
          <CenteredSection>
            <SearchResults location={location} />
          </CenteredSection>
          </div>
        </AppWrapper>
      </article>
    );
  }
}

export default HomePage;
