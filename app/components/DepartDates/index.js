/**
 *
 * DepartDates
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Label from './Label';
import DepartDays from '../DepartDays/Loadable';
import DepartWeeks from '../DepartWeeks/Loadable';
import DepartMonths from '../DepartMonths/Loadable';

/* eslint-disable react/prefer-stateless-function */
class DepartDates extends React.PureComponent {
  render() {
    const { departingType, updateDates, selectedDates } = this.props;
    const propsToPass = { updateDates, selectedDates };
    if (departingType === 'day(s)') {
      return (
        <Label>
          <FormattedMessage {...messages.days} />
          <DepartDays {...propsToPass} />
        </Label>
      );
    } else if (departingType === 'week(s)') {
      return (
        <Label>
          <FormattedMessage {...messages.weeks} />
          <DepartWeeks {...propsToPass} />
        </Label>
      );
    }
    else if (departingType === 'month(s)') {
      return <Label>
        <FormattedMessage {...messages.months} />
        <DepartMonths {...propsToPass} />
      </Label>;
    }
    
  }
}

DepartDates.propTypes = {
  departingType: PropTypes.string,
  updateDates: PropTypes.func,
  selectedDates: PropTypes.array,
};

export default DepartDates;
