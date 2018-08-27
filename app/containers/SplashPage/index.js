/**
 *
 * SplashPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { destinationLocations } from 'containers/SearchBar/menuOptions';
import LoadingIndicator from 'components/LoadingIndicator'
import datefns from 'date-fns';
import messages from './messages';
import {buildSearchQuery} from 'containers/SearchBar/buildSearchQuery'
import { GRAPHQL_HOST } from '../../../config';
import Axios from 'axios';
import TeaserFlight from 'components/TeaserFlight';
import TeaserCountryComponent from 'components/TeaserCountryComponent';

const onlyCities = destinationLocations.filter(dest => dest.isCity)
const onlyCountries = destinationLocations.filter(dest => dest.isCountry)

const fetchRandomLocations = (num) => {
  // fetches random cities in unique countries, displays the 4 cheapest
  
  const dests = [];
  while (dests.length<num){
    const randomId = Math.floor(Math.random() * onlyCities.length);
    const val = onlyCities[randomId]
    if (val.isCity && !dests.includes(val) && !(val.airport === 'AUS' || val.airport==='IAD' || val.airport === 'SJC')) {
      dests.push(val);
    }
  }
  return dests;
}


const nextMonthsDates = ()=>{
  const now = new Date();
  const startOfNextMonth = datefns.addMonths(datefns.startOfMonth(now),1);
  const arr = [startOfNextMonth];
  const days = datefns.getDaysInMonth(startOfNextMonth);
  for(let i = 1;i<days;i++){
    arr.push( datefns.addDays(arr[i-1],1) )
  }
  return arr.map(x=>datefns.format(x,'YYYY-MM-DD'))
}

/* eslint-disable react/prefer-stateless-function */
export class SplashPage extends React.Component {

  constructor(props){
    super(props);
    this.state={
      flights:false,
      countries:false,
    }
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(){
    return new Promise((res,rej)=>{
      const results = [];
     
      const departureTimes = nextMonthsDates();
      const destinations = fetchRandomLocations(14)
      const departingAirport = {airport:'AUS'};

      (async ()=>{

        const graphqlquery = buildSearchQuery({
          departingAirport,
          destinations,
          departureTimes,
        });
          const host = GRAPHQL_HOST; 
          const requestURL = `${host}?query=${graphqlquery}`;

          const searchResults = await Axios(requestURL)
          let flightArray = searchResults.data.data.flightSearch;
        
          // only store the cheapest flight for each destination;
          flightArray = flightArray.reduce((list,flight)=>{
            const ind = list.findIndex(x=>x.to_id===flight.to_id);
          
            if(ind===-1){
              list.push(flight);
            }else if(list[ind].price>flight.price){
              list[ind] = flight;
            }
            return list;
          },[]);
          flightArray.sort((a,b)=>a.price-b.price);
          
        res(flightArray.slice(0,4));
      })();
    });
  }

  componentDidMount() {
   
    this.fetchFlights().then(flights => {
      const cities = fetchRandomLocations(4);
      this.setState({ flights, cities });
    });
  }

 
  render() {
    const {flights, cities} = this.state;
    if(!flights){
      return (
        <LoadingIndicator />

      );
    }
    const nextMonth = datefns.addMonths(datefns.startOfMonth(new Date()), 1);
    return (<div>
      <div >Popular Flights from Austin in {datefns.format(nextMonth, 'MMMM')}</div>
      <div style={{ marginTop:'20px', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
        {
          flights.map((flight,i) => <TeaserFlight key={`teaser${i}`} flight={flight} />)
        }
      </div>
      <div>{datefns.format(datefns.addMonths(nextMonth,1), 'MMMM')} deals</div> 
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
        {
          cities.map((city, i) => <TeaserCountryComponent key={`teaser_c${i}`} city={city} />)
        }
        </div>
      </div>
    );
  }
}

SplashPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(SplashPage);
