/**
 *
 * FlightResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FlightList from '../../components/FlightList/index'
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
  
    from_id: 'AUS',
      to_id: 'BRA',
        departing: `2018-09-${day}`,
        price
      }
      data.push(temp);
  }
}
makeFakeData()

/* eslint-disable react/prefer-stateless-function */
export class FlightResults extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status : 'loading',
      filteredFlights:[]
    }
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount(){
    this.onFilterChange();
  }

  onFilterChange(){

    this.setState({status:'loading'})

    this.setState({filteredFlights:data},()=>this.setState({status:'loaded'}))

  }
  



  render() {
    const {status, filteredFlights} =  this.state;
    if (status ==='loading'){
      return(<div>Loading...</div>)
    }
    return <div>
        <FlightList flights={filteredFlights} />
      </div>;
  }
}

FlightResults.propTypes = {
  flights: PropTypes.object,
};

export default FlightResults;
