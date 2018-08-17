
const formatDateString = dateArray => {
  // let dateString = '[';
  // dateArray.forEach(date => {
  //   dateString += `"${date}", `;
  // });
  // dateString += ']';
  // return dateString;
  return '["' + dateArray.join('", "') + '"]';
}

const returnSearchType = (metadest) => {
  switch (metadest) {
    case 'city(s)':
      return 'oneWayFlightsToAirports';
    case 'country(s)':
      return 'oneWayFlightsToCountries';
    case 'region(s)':
      return 'oneWayFlightsToRegions';
    default:
      return 'ERROR';
  }
}

const buildSearchQuery = (metadest, searchParams) => {
  const { departingAirport, destination, dates } = searchParams;

  const dateString = formatDateString(dates);

  let searchType = returnSearchType(metadest);

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