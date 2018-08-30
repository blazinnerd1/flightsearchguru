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

    let component = <DepartDays {...propsToPass} />;
    if (departingType.value === 'weeks') {
      component = <DepartWeeks {...propsToPass} />;
    } else if (departingType.value === 'months') {
      component = <DepartMonths {...propsToPass} />;
    }

    return (
      <Label>
        <FormattedMessage {...messages.datesSelected} />
        {component}
      </Label>
    );
  }
}

DepartDates.propTypes = {
  departingType: PropTypes.string,
  updateDates: PropTypes.func,
  selectedDates: PropTypes.array,
};

export default DepartDates;
