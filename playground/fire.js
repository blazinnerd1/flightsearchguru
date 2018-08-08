const axios = require('axios');

const API_KEY = 'Basic YOURCODEGOESHERE';

const fire = async (fromAirport, toAirport, departureDate) => {
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
      Authorization: API_KEY,
      'Content-Type': 'application/json',
    },
  }).then(({ data }) => {
    try {
      const flightPrices = data.FlightResponse.FpSearch_AirLowFaresRS.SegmentReference.RefDetails.map(
        x => x.PTC_FareBreakdown.Adult.TotalAdultFare,
      );
      return Math.floor(Math.min(...flightPrices));
    } catch (err) {
      console.log(`ERROR! ${departureDate}: ${fromAirport} to ${toAirport} `, err);
      return false;
    }
  });
  const finalTime = Date.now();
  const searchDuration = finalTime - starttime;
  if (cheapestFlight) {
    console.log(`${departureDate}: ${fromAirport} to ${toAirport} $${cheapestFlight}\t${searchDuration}ms`);
  }
};

fire('NYC', 'LON', '2018-09-01');
