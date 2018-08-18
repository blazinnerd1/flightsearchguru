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

const { startOfMonth, addMonths, format } = require('date-fns');

// starting month is feb 2018 for example
// {month:1, year:2018}
const startingDate = addMonths(startOfMonth(new Date()), 1);
// empty array of 6 objects for our 6 months
let monthOptions = [startingDate]
for(let i = 1;i<6;i++){
  monthOptions.push( addMonths(monthOptions[i-1],1 ) )
}

// console.log('monthOptions',monthOptions)
monthOptions = monthOptions.map(date => format(date, 'MMM YY'));
// console.log('monthOptions', monthOptions)
monthOptions = monthOptions.map(date => ({ value: date, label: date }));
console.log('monthOptions', monthOptions)


/* eslint-disable react/prefer-stateless-function */
class DepartMonths extends React.Component {
  render() {
    const { selectedDates } = this.props;
    console.log('---------------------------', selectedDates);

    console.log('rendering depart months');
    const { updateDates } = this.props;
    return (
      <div>
        <Select
          isMulti
          onChange={updateDates}
          options={monthOptions}
          placeholder="Select Month(s)"
        /> 
      </div>
    );
  }
}

DepartMonths.propTypes = {
  updateDates: PropTypes.func,
  selections: PropTypes.array
};

export default DepartMonths;
