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

import SelectedDisplay from './SelectedDisplay';

const { addDays, addMonths } = require('date-fns');

const min = addDays(new Date(), 1);
const max = addMonths(min, 6);

/* eslint-disable react/prefer-stateless-function */
class DepartDays extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    document.getElementById('actualCalendar').children[0].click();
  }
  
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
        <div>
          <SelectedDisplay onClick={this.handleClick}>
            {numDaysString}
          </SelectedDisplay>
        </div>
        <div id="actualCalendar" style={{display:'none'}}>
          <DateLabel>
            <mobiscroll.Calendar
              id="dayCalendar"
              ref="calendar"
              select="multiple"
              counter
              min={min}
              max={max}
              onClose={updateDates}
              placeholder="Select day(s)"
            />
          </DateLabel>
        </div>
      </div>
    );
  }
}

DepartDays.propTypes = {
  updateDates: PropTypes.func,
  selectedDates: PropTypes.array,

};

export default DepartDays;
