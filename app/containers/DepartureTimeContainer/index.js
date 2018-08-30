/**
 *
 * DepartureTimeContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDepartureTimeContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const { addDays, addMonths, addWeeks, setDay } = require('date-fns');

const minDay = addDays(new Date(), 1);
const maxDay = addMonths(minDay, 6);
const minWeek = setDay(addWeeks(new Date(), 1), 1);
const maxWeek = setDay(addMonths(minWeek, 6), 0);

const stringToRender = (selectedDates, departureTimeType) => {
  const len = selectedDates.length;

  if (departureTimeType === 'day(s)') {
    if (len === 1) {
      return '1 day selected';
    }
    return `${len} days selected`;
  } else if (departureTimeType === 'weeks(s)') {
    if (len / 7 === 1) {
      return '1 week selected';
    }
    return `${len / 7} weeks selected`;
  }
};

/* eslint-disable react/prefer-stateless-function */
export class DepartureTimeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    document.getElementById('actualCalendar').children[0].click();
  }

  render() {
    const {  updateDates } = this.props;

    return (
      <div>
        <SelectedDisplay onClick={this.handleClick}>
          {stringToRender()}
        </SelectedDisplay>
        <div id="mobiCalendarPopup" style={{ display: 'none' }}>
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

DepartureTimeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  departureTimeType: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  departuretimecontainer: makeSelectDepartureTimeContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'departureTimeContainer', reducer });
const withSaga = injectSaga({ key: 'departureTimeContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DepartureTimeContainer);
