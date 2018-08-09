require('dotenv').config();
const axios = require('axios');

if (!process.env.FLIGHTS_DBHOST) throw new Error('no database host specified');
if (!process.env.FLIGHTS_DBUSERNAME) throw new Error('no database user specified');
if (!process.env.FLIGHTS_DBPASSWORD) throw new Error('no database password specified');
if (!process.env.FLIGHTS_DBNAME) throw new Error('no database name specified');
if (!process.env.API_FAREPORTALLABS) throw new Error('no fareportal api key specified');


// OPEN DATABASE CONNECTION
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.FLIGHTS_DBHOST,
    user: process.env.FLIGHTS_DBUSERNAME,
    password: process.env.FLIGHTS_DBPASSWORD,
    database: process.env.FLIGHTS_DBNAME,
  },
});

const getOneWayFlight = async (fromAirport, toAirport, departureDate) => {
  const starttime = Date.now();
  const body = {
    FlightSearchRequest: {
      Adults: 1,
      Child: 0,
      Seniors: 0,
      InfantInLap: 0,
      InfantOnSeat: 0,
      Youths: 0,
      Kid: 0,
      TypeOfTrip: 'ONEWAYTRIP',
      ClassOfService: 'ECONOMY',
      SearchAlternateDates: false,
      FromTime: null,
      ToTime: null,
      SegmentDetails: [
        {
          Origin: `${fromAirport}`,
          Destination: `${toAirport}`,
          DepartureDate: `${departureDate}`,
          DepartureTime: '0100',
        },
      ],
    },
    ResponseVersion: 'VERSION41',
  };
  const cheapestFlight = await axios({
    method: 'post',
    url:
      'https://api-dev.fareportallabs.com/air/api/search/searchflightavailability',
    data: body,
    headers: {
      Authorization: process.env.API_FAREPORTALLABS,
      'Content-Type': 'application/json',
    },
  }).then(({ data }) => {
    try {
      const flightPrices = data.FlightResponse.FpSearch_AirLowFaresRS.SegmentReference.RefDetails.map(x => x.PTC_FareBreakdown.Adult.TotalAdultFare);
      const cheapestPrice = Math.floor(Math.min(...flightPrices));

      return {
        from: fromAirport, to: toAirport, departing: departureDate, price: cheapestPrice,
      };
    } catch (err) {
      console.log(`ERROR! oneway from ${fromAirport} to ${toAirport} on ${departureDate}: `, err);
      return false;
    }
  });
  const finalTime = Date.now();
  const searchDuration = finalTime - starttime;
  if (cheapestFlight) {
    console.log(`${cheapestFlight.departing}: ${cheapestFlight.from} to ${cheapestFlight.to} $${cheapestFlight.price}\t${searchDuration}ms`);
  }
};

getOneWayFlight('NYC', 'LON', '2018-09-01');
