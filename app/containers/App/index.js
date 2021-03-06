/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import About from 'components/About';
import PriceAlert from 'containers/PriceAlert';
import Footer from 'components/Footer';
import NavigationBar from 'containers/NavigationBar';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Helmet
        titleTemplate="%s - Flight Search Guru"
        defaultTitle="Flight Search Guru"
      >
        <meta
          name="description"
          content="World's #1 Flight Exploration Engine"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={HomePage} />
      </Switch>
      <AppWrapper>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/pricealerts" component={PriceAlert} />
        </Switch>
      </AppWrapper>
      <AppWrapper>
        <Footer />
      </AppWrapper>
    </div>
  );
}
