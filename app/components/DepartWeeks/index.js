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

import Field from './Field';

const { addWeeks, setDay, addMonths } = require('date-fns');

// min is the start of next week (week starts on monday)
const min = setDay(addWeeks(new Date(), 1), 1);
// max is 6 months later than min, at the end of the week (sunday)
const max = setDay(addMonths(min, 6), 0);

/* eslint-disable react/prefer-stateless-function */
class DepartWeeks extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.calendarRef = React.createRef();
  }

  handleClick(e){
    document.getElementById('actualCalendar').children[0].click();
  }

  render() {
    const { updateDates, selectedDates } = this.props;

    const numWeeks = selectedDates.length / 7;
    let numWeeksString = '';
    if (numWeeks === 1) {
      numWeeksString = '1 week selected';
    } else {
      numWeeksString = `${numWeeks} weeks selected`;
    }
    

    return <div>
        {/* <Field
          onClick={ (evt) => { this.handleClick(evt); this.eventFire(this.calendarRef.current, 'click'); }}
        >{numWeeksString}
        </Field> */}
        {/* <FormattedMessage {...messages.header} /> */}
        <div>
          <Field onClick={evt => {
              this.handleClick(evt);
            }}>
            {numWeeksString}
          </Field>
        </div>
      <div id="actualCalendar" style={{display:'none'}}>
          <DateLabel>
            <mobiscroll.Calendar id="weekCalendar" ref="calendar" selectType="week" min={min // defaultValue={oneWeek}
              } max={max} firstSelectDay={1} firstDay={1} select="multiple" onClose={evt => {
                console.log(evt);
                updateDates(evt);
              }} placeholder="Select week(s)" />
          </DateLabel>
        </div>
      </div>;
  }
}

DepartWeeks.propTypes = {
  updateDates: PropTypes.func,
  selectedDates: PropTypes.array,
};

export default DepartWeeks;
