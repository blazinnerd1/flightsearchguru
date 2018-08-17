/**
 *
 * FlightFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectFilteredFlights } from 'containers/SearchBar2/selectors';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

FlightFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  flightfilter: makeSelectFilteredFlights(),
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

export default compose(withConnect)(FlightFilter);
