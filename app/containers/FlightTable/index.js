/**
 *
 * FlightTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightTable extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>FlightTable</title>
          <meta name="description" content="Description of FlightTable" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

FlightTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(FlightTable);
