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
            // defaultValue={oneWeek}
            firstSelectDay={1}
            firstDay={1}
            select="multiple"
            onClose={updateDates}
            placeholder="Please Select..."
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
