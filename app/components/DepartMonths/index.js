/**
 *
 * DepartMonths
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import DateLabel from '../DepartDates/DateLabel';
import Select from 'react-select';
import messages from './messages';
import datefns from 'date-fns';

const { startOfMonth, addMonths, format } = require('date-fns');

// starting month is feb 2018 for example
// {month:1, year:2018}
const startingDate = addMonths(startOfMonth(new Date()), 1);
// empty array of 6 objects for our 6 months
let monthOptions = [startingDate];
for (let i = 1; i < 6; i++) {
  monthOptions.push(addMonths(monthOptions[i - 1], 1));
}

monthOptions = monthOptions.map(date => format(date, 'MMM YY'));
monthOptions = monthOptions.map(date => ({ value: date, label: date }));

/* eslint-disable react/prefer-stateless-function */
class DepartMonths extends React.Component {

  render() {
    const { updateDates, selectedDates } = this.props;
    const months = [];
    const selectedMonths = [];

    selectedDates.forEach(date => {
      const formattedDate = datefns.format(date, 'MMM YY' );
      if (!months.includes(formattedDate)) {
        months.push(formattedDate);
      }
    });

    months.forEach(month => {
      selectedMonths.push({label: month});
    });

    return (
      <div style={{ color: 'black', fontWeight: 'normal' }}>
        <Select
          isMulti
          onChange={updateDates}
          options={monthOptions}
          value={selectedMonths}
          placeholder="0 selected"
        />
      </div>
    );
  }
}

DepartMonths.propTypes = {
  updateDates: PropTypes.func,
};

export default DepartMonths;
