/**
 *
 * DepartWeeks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import DateLabel from '../DepartDates/DateLabel';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import mobiscroll from '../../../mobiscroll/dist/mobiscroll.react.STRIPPED';
import '../../../mobiscroll/css/mobiscroll.min.css';
const { addWeeks, setDay, addMonths } = require('date-fns');

// min is the start of next week (week starts on monday)
const min = setDay(addWeeks(new Date(), 1), 1);
// max is 6 months later than min, at the end of the week (sunday)
const max = setDay(addMonths(min, 6), 0);

/* eslint-disable react/prefer-stateless-function */
class DepartWeeks extends React.Component {
  render() {
    const { updateDates } = this.props;

    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <DateLabel>
          <mobiscroll.Calendar
            ref="calendar"
            selectType="week"
            min={
              min // defaultValue={oneWeek}
            }
            max={max}
            firstSelectDay={1}
            firstDay={1}
            select="multiple"
            onClose={updateDates}
            placeholder="Select week(s)"
          />
        </DateLabel>
      </div>
    );
  }
}

DepartWeeks.propTypes = {
  updateDates: PropTypes.func,
};

export default DepartWeeks;
