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

import mobiscroll from '../../../mobiscroll/dist/mobiscroll.react.STRIPPED';
import '../../../mobiscroll/css/mobiscroll.min.css';
const { addDays, addMonths } = require('date-fns');

const min = addDays(new Date(), 1);
const max = addMonths(min, 6);

/* eslint-disable react/prefer-stateless-function */
class DepartDays extends React.Component {
  render() {
    const { updateDates, selectedDates } = this.props;

    const numDays = selectedDates.length;
    let numDaysString = '';
    if (numDays === 1) {
      numDaysString = '1 day selected';
    } else {
      numDaysString = `${numDays} days selected`;
    }

    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <DateLabel>
          <mobiscroll.Calendar
            ref="calendar"
            select="multiple"
            counter
            min={min}
            max={max}
            onClose={updateDates}
            placeholder="Select day(s)"
            style={{ width: '2000px' }}
          />
        </DateLabel>
        <div>{numDaysString}</div>
      </div>
    );
  }
}

DepartDays.propTypes = {
  updateDates: PropTypes.func,
  selectedDates: PropTypes.array,

};

export default DepartDays;
