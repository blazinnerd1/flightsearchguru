const formatDateString = dateArray => `["${dateArray.join('", "')}"]`;

const returnSearchType = destinationType => {
  switch (destinationType) {
    case 'city(s)':
      return 'oneWayFlightsToAirports';
    case 'country(s)':
      return 'oneWayFlightsToCountries';
    case 'region(s)':
      return 'oneWayFlightsToRegions';
    default:
      return 'ERROR';
  }
};

const buildSearchQuery = (metadest, searchParams) => {
  console.log('searchparams',searchParams);
  const { departingAirport, destination, dates } = searchParams;

  const dateString = formatDateString(dates);
  const searchType = returnSearchType(metadest);
  
  const searchQuery = `
    {
      ${searchType}(
        from: "${departingAirport}"
        to: "${destination}"
        dates: ${dateString}
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

export { buildSearchQuery, returnSearchType };
