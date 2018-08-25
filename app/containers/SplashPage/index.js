/**
 *
 * SplashPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { destinationLocations } from 'containers/SearchBar/menuOptions';
import queryString from 'query-string';
import datefns from 'date-fns';
import messages from './messages';
import {buildSearchQuery} from 'containers/SearchBar/buildSearchQuery'
import { GRAPHQL_HOST } from '../../../config';
import Axios from 'axios';
import Teaser from './teaser';

const onlyCities = destinationLocations.filter(dest=>dest.isCity)

const fetchRandomLocations = () => {
  // fetches random cities in unique countries, displays the 4 cheapest
  
  const dests = [];
  while (dests.length<14){
    const randomId = Math.floor(Math.random() * onlyCities.length);
    const val = onlyCities[randomId]
    if (val.isCity && !dests.includes(val) && !(val.airport === 'AUS' || val.airport === 'SJC')) {
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
      flights:false
    }
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(){
    return new Promise((res,rej)=>{
      const results = [];
      const dates = nextMonthsDates();
      const destinations = fetchRandomLocations()
      const departingAirport = 'AUS';

      (async ()=>{

          const graphqlquery = buildSearchQuery({ departingAirport, destinations, dates });
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
      this.setState({flights})
    });
  }


  render() {
    console.log(this.state);
    const {flights} = this.state;
    if(!flights){
      return (
        <div />
        
      );
    }
    return (
      <div>
        {
          flights.map((flight,i) => <Teaser key={`teaser${i}`} flight={flight} />)
        }
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
