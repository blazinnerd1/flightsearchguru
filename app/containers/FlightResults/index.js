/**
 *
 * FlightResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ReactTable from 'react-table'; 
import "react-table/react-table.css";
import Select from 'react-select';
import messages from './messages';
const {airports} = require('../../../data/data')

const data = [];
const makeFakeData = ()=>{
  while(data.length<50){
    const price = Math.floor(Math.random()*200+200);
    const day = Math.floor(Math.random()*12+10)
    const temp = {

        from_code: 'AUS',
        to_code: 'BRA',
        date: `2018-09-${day}`,
        price
      }
      data.push(temp);
  }
}
makeFakeData()


const columns = [ {
  Header: 'Date',
  accessor: 'date' // String-based value accessors!
},{
    Header: 'From',
    accessor: 'from_code' // String-based value accessors!
  }, {
    Header: 'To',
    accessor: 'to_code' // String-based value accessors!
  }, {
    Header: 'Price',
    accessor: 'price' // String-based value accessors!
  } ]

/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {
  
  

  render() {
    return <div>
      <ReactTable data={data} columns={columns} className="-striped -highlight" filterable= {true}
/>
      </div>;
  }
}

FlightResults.propTypes = {
  flights: PropTypes.object,
};

export default FlightResults;
