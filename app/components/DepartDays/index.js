/**
 *
 * DepartDays
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import DateLabel from '../DepartDates/DateLabel';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import mobiscroll from '../../../mobiscroll/dist/mobiscroll.react.min';
import '../../../mobiscroll/css/mobiscroll.min.css';

/* eslint-disable react/prefer-stateless-function */
class DepartDays extends React.Component {
  render() {
    const { updateDates } = this.props;

    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <DateLabel>
          <mobiscroll.Calendar
            ref="calendar"
            select="multiple"
            counter
            onClose={updateDates}
            placeholder="Please Select..."
          />
        </DateLabel>
      </div>
    );
  }
}

DepartDays.propTypes = {
  updateDates: PropTypes.func,
};

export default DepartDays;
