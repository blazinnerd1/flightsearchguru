
const formatDateString = dateArray => {
  let dateString = '[';
  dateArray.forEach(date => {
    dateString += `"${date}", `;
  });
  dateString += ']';
  return dateString;
}

const buildSearchQuery = (metadest, searchParams) => {
  const { departingAirport, destination, dates } = searchParams;

  const dateString = formatDateString(dates);

  const searchQuery = `
    {
      oneWayFlightsToAirports(
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

export { buildSearchQuery };