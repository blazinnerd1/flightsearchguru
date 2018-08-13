/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import FlightResults from '../FlightResults';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectGeodata,
  makeSelectGeodataLoaded,
  makeSelectGeodataError,
} from 'containers/HomePage/selectors';
import CenteredSection from './CenteredSection';
import SearchBar from '../SearchBar/Loadable';
import reducer from './reducer';
import saga from './saga';
import { loadGeoData } from '../HomePage/actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    if (!this.props.geoDataLoaded) {
      this.props.loadGeoDataStart();
    }
  }

  render() {
    const { geoData } = this.props;
    const searchbarProps = {};
    return (
      <article>
        <Helmet>
          <title>Search</title>
          <meta name="description" content="Searc page of hergin derginn" />
        </Helmet>
        <div>
          <CenteredSection>
            <SearchBar {...searchbarProps} />
            <FlightResults />
          </CenteredSection>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  geoDataLoaded: PropTypes.bool,
  geoDataError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loadGeoDataStart: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadGeoDataStart: () => dispatch(loadGeoData()),
  };
}

const mapStateToProps = createStructuredSelector({
  geoDataLoaded: makeSelectGeodataLoaded(),
  geoDataError: makeSelectGeodataError(),
  geoData: makeSelectGeodata(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
