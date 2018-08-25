import {
  airportsInRegionDict,
  airportsInCountryDict,
  destinationLocations,
} from './menuOptions';

const isCity = x => x.isCity;
const isRegion = x => x.isRegion;
const isCountry = x => x.isCountry;

const parseDestinations = dests => {
  if (dests.length === 1 && dests[0].isAnywhere) {
    return destinationLocations.filter(isCity).map(x => x.airport);
  }
  let sol = [];

  dests.forEach(dest => {
    if (isCity(dest)) {
      sol.push(dest.airport);
    } else if (isRegion(dest)) {
      sol = sol.concat(airportsInRegionDict[dest.labelObj.baseString]);
    } else if (isCountry(dest)) {
      sol = sol.concat(airportsInCountryDict[dest.labelObj.baseString]);
    }
  });
  return Array.from(new Set(sol));
};

const buildSearchQuery = searchParams => {
  const { departingAirport, destinations, departureTimes } = searchParams;
  console.log(departingAirport, destinations, departureTimes);
  const formattedToAirports = parseDestinations(destinations);
  const searchType = 'airports';

  const formattedDates = departureTimes;
  const formattedDepartingAirport = departingAirport.airport;
  console.log(
    'toairports',
    formattedToAirports,
    'dates',
    formattedDates,
    'departingairport',
    formattedDepartingAirport,
  );
  const searchQuery = `
    {
        flightSearch(
        type: "${searchType}"
        from: "${formattedDepartingAirport}"
        to: ${JSON.stringify(formattedToAirports)}
        dates: ${JSON.stringify(formattedDates)}
      ) {
        id
        from_id
        to_id
        departing
        price
        created_at
        carriers
        stops
        arrivetime
      }
    }
  `;

  return searchQuery;
};

export { buildSearchQuery };
