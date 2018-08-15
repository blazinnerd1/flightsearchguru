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
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import Label from './Label';
import DepartDays from '../DepartDays/Loadable';
import DepartWeeks from '../DepartWeeks/Loadable';
// import DepartMonths from '../DepartMonths/Loadable';


/* eslint-disable react/prefer-stateless-function */
class DepartDates extends React.PureComponent {
  render() {
    const {
      metadeparting,

      updateDates,
    } = this.props;

    if (metadeparting === 'day(s)') {
      return (
        <Label>
          <FormattedMessage {...messages.days} />
          <DepartDays updateDates={updateDates}/>
        </Label>
      );
    } else if (metadeparting === 'week(s)') {
      return (
        <Label>
          <FormattedMessage {...messages.weeks} />
          <DepartWeeks updateDates={updateDates}/>
        </Label>
      );
    } 
    // else if (metadeparting === 'months(s)') {
    //   return (
    //     <Label>
    //       <FormattedMessage {...messages.months} />
    //       <DepartMonths updateDates={updateDates}/>
    //     </Label>
    //   );
    // }
    return <Label>Broken DepartDates Componenet</Label>
  }
}

DepartDates.propTypes = {
  metadeparting: PropTypes.string,
  updateDates: PropTypes.func,

};

export default DepartDates;
