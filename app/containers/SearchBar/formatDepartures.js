import { cities } from '../../../data/data'


const formatDepartures = (airports) => {
  return airports.map(airportCode => {
    const city = cities.filter(cityObj => {
      return cityObj.airport === airportCode;
    });
    return {
      id: airportCode,
      label: `${city[0].airport} - ${city[0].name}`,
    }
  });
};

export { formatDepartures };