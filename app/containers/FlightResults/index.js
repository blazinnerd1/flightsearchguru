/**
 *
 * FlightResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FlightList from '../../components/FlightList/index'
import FlightFilter from '../FlightFilter/Loadable'
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import messages from './messages';
import LoadingIndicator from '../../components/LoadingIndicator';

const {airports} = require('../../../data/data')

const data = [];
const makeFakeData = ()=>{
  while(data.length<50){
    const price = Math.floor(Math.random()*200+200);
    const day = Math.floor(Math.random()*12+10)
    const temp = { from_id: 'IAD', to_id: 'AUH', departing: `2018-09-${day}`, price };
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
      filteredFlights:[],
    }
    this.onFilterChange = this.onFilterChange.bind(this);
  
  }

  componentDidMount(){
     this.onFilterChange();
  }

  onFilterChange(){

    this.setState({status:'loading'})
    // filter the data base on shit
    this.setState({filteredFlights:data},()=>this.setState({status:'loaded'}))
  }

  render() {
    const {status, filteredFlights} =  this.state;
    if (status ==='loading'){
      return(<LoadingIndicator />)
    }
    return (<div style={{display:'flex'}}> <FlightFilter />
        <FlightList flights={filteredFlights} />
    </div>);
  }
}

FlightResults.propTypes = {
  flights: PropTypes.object,
};

export default FlightResults;
