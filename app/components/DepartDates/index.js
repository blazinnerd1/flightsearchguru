/**
 *
 * DepartDates
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Label from './Label';
import DepartDays from '../DepartDays';
import DepartWeeks from '../DepartWeeks';
import DepartMonths from '../DepartMonths';
/* eslint-disable react/prefer-stateless-function */
class DepartDates extends React.PureComponent {
  render() {
    const { departingType, updateDates, selectedDates } = this.props;
    const propsToPass = { updateDates, selectedDates };
    if (departingType.value === 'days') {
      return (
        <Label>
          <FormattedMessage style={{ fontFamily: 'Open Sans' }}{...messages.days} />
          <DepartDays {...propsToPass} />
        </Label>
      );
    } else if (departingType.value === 'weeks') {
      return (
        <Label>
          <FormattedMessage {...messages.weeks} />
          <DepartWeeks {...propsToPass} />
        </Label>
      );
    } else if (departingType.value === 'months') {
      return (
        <Label>
          <FormattedMessage {...messages.months} />
          <DepartMonths {...propsToPass} />
        </Label>
      );
    }
  }
}

DepartDates.propTypes = {
  departingType: PropTypes.string,
  updateDates: PropTypes.func,
  selectedDates: PropTypes.array,
};

export default DepartDates;
