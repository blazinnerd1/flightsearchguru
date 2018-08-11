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
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import CenteredSection from './CenteredSection';
import SearchBar from '../SearchBar/Loadable';
import reducer from './reducer';
import saga from './saga';
import { loadGeoData } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.loadGeoDataStart();
  }

  render() {
    const { loading, error } = this.props;
    const searchbarProps = { loading, error };
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
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export function mapDispatchToProps(dispatch) {
  return {
    loadGeoDataStart: () => dispatch(loadGeoData()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
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
