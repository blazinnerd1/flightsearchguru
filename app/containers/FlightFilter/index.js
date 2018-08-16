/**
 *
 * FlightFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFlightFilter from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightFilter extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>FlightFilter</title>
          <meta name="description" content="Description of FlightFilter" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

FlightFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  flightfilter: makeSelectFlightFilter(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'flightFilter', reducer });
const withSaga = injectSaga({ key: 'flightFilter', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FlightFilter);
