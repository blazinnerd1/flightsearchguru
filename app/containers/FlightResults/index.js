/**
 *
 * FlightResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FlightList from '../../components/FlightList/index'
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import messages from './messages';
const {airports} = require('../../../data/data')

const data = [];

// 50% of flights have one segment. the other 50% have 3 segments
const getFakeFlightInfo = () => {
  if (Math.random() > .5) {
    return `[{"DepartureAirport":{"LocationCode":"AUS"},"ArrivalAirport":{"LocationCode":"LGW"},"Equipment":{"AirEquipType":"789"},"FlightCabin":{"CabinType":"Coach"},"FlightClass":{"ClassType":"V"},"MarketingAirline":{"Code":"DI"},"OperatedByAirline":{"CompanyText":"DI"},"Flight":{"FlightType":"O"},"OpaqueType":"0","ShowBaggageAlert":false,"StopAirports":null,"FlightNumber":"7182","DepartureDateTime":"06Sep2018T04:20 PM","ArrivalDateTime":"07Sep2018T07:25 AM","FlightDuration":"09.05","FDType":"T","StopQuantity":0,"RPH":1,"CurrentBrandName":null,"UpgradedBrandName":null,"IsUpgradable":false}]`;
  } else {
    return `[{"DepartureAirport":{"LocationCode":"AUS"},"ArrivalAirport":{"LocationCode":"JFK"},"Equipment":{"AirEquipType":"320"},"FlightCabin":{"CabinType":"Coach"},"FlightClass":{"ClassType":"K"},"MarketingAirline":{"Code":"FI"},"OperatedByAirline":{"CompanyText":"JetBlue Airways"},"Flight":{"FlightType":"O"},"OpaqueType":"0","ShowBaggageAlert":false,"StopAirports":null,"FlightNumber":"7808","DepartureDateTime":"06Sep2018T01:44 PM","ArrivalDateTime":"06Sep2018T06:30 PM","FlightDuration":"3.46","FDType":"S","StopQuantity":0,"RPH":1,"CurrentBrandName":null,"UpgradedBrandName":null,"IsUpgradable":false},{"DepartureAirport":{"LocationCode":"JFK"},"ArrivalAirport":{"LocationCode":"KEF"},"Equipment":{"AirEquipType":"76W"},"FlightCabin":{"CabinType":"Coach"},"FlightClass":{"ClassType":"K"},"MarketingAirline":{"Code":"FI"},"OperatedByAirline":{"CompanyText":"FI"},"Flight":{"FlightType":"O"},"OpaqueType":"0","ShowBaggageAlert":false,"StopAirports":null,"FlightNumber":"614","DepartureDateTime":"06Sep2018T08:20 PM","ArrivalDateTime":"07Sep2018T05:55 AM","FlightDuration":"5.35","FDType":"S","StopQuantity":0,"RPH":2,"CurrentBrandName":null,"UpgradedBrandName":null,"IsUpgradable":false},{"DepartureAirport":{"LocationCode":"KEF"},"ArrivalAirport":{"LocationCode":"LGW"},"Equipment":{"AirEquipType":"75W"},"FlightCabin":{"CabinType":"Coach"},"FlightClass":{"ClassType":"K"},"MarketingAirline":{"Code":"FI"},"OperatedByAirline":{"CompanyText":"FI"},"Flight":{"FlightType":"O"},"OpaqueType":"0","ShowBaggageAlert":false,"StopAirports":null,"FlightNumber":"470","DepartureDateTime":"07Sep2018T07:45 AM","ArrivalDateTime":"07Sep2018T11:45 AM","FlightDuration":"3.0","FDType":"S","StopQuantity":0,"RPH":3,"CurrentBrandName":null,"UpgradedBrandName":null,"IsUpgradable":false}]`;
  }


}
const makeFakeData = ()=>{
  while(data.length<50){
    const price = Math.floor(Math.random()*200+200);
    const day = Math.floor(Math.random()*12+10)
    const temp = { from_id: 'IAD', to_id: 'AUH', departing: `2018-09-${day}`, price, info: getFakeFlightInfo()};
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
    return <div style={{textAlign:'center'}}>
        <FlightList flights={filteredFlights} />
      </div>;
  }
}

FlightResults.propTypes = {
  flights: PropTypes.object,
};

export default FlightResults;
