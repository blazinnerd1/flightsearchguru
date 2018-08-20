const returnSearchType = destinationType => {
  switch (destinationType) {
    case 'city(s)':
      return 'airports';
    case 'country(s)':
      return 'countries';
    case 'region(s)':
      return 'regions';
    default:
      return 'ERROR';
  }
};

const buildSearchQuery = (destinationType, searchParams) => {
  // console.log('searchparams',searchParams);
  const { departingAirport, destinations, dates } = searchParams;

  const searchType = returnSearchType(destinationType);

  const searchQuery = `
    {
        flightSearch(
        type: "${searchType}"
        from: "${departingAirport}"
        to: ${JSON.stringify(destinations.map(x => x.value))}
        dates: ${JSON.stringify(dates)}
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
