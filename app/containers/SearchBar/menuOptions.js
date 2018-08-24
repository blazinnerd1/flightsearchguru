import data, { supportedDepartingAirports } from '../../../data/data';
console.log(data)
let destinations = []
const anywhere = { value: 'anywhere|anywhere', label: 'anywhere|anywhere' }

destinations.push(anywhere)

const regions = data.regions.map((region, index) => ({
  value: `region|${region}`,
  label: `region|${region}`,
}));
console.log(destinations)
destinations = destinations.concat(regions);

const countries = data.countries.map(country => ({
  value: `country|${country.id}`,
  label: `country|${country.label} ${country.emoji}`,
}));
destinations = destinations.concat(countries);

const cities = data.cities.map(city => {
  let airport_name = '';
  let country_name = '';

  for (let airport of data.airports) {
    if (airport.id === city.airport) {
      airport_name = airport.name;
      break;
    }
  }

  for (let country of data.countries) {
    if (country.id === city.id_countries) {
      country_name = country.name;
      break;
    }
  }
  return { value: `city|${city.airport}`, label: `city|${city.airport}|${city.name}|${airport_name}|${country_name}` };
});



destinations = destinations.concat(cities);


const departureLocations = cities.filter(city =>
  supportedDepartingAirports.includes(city.id),
);



const typeOptions = ['one-way', 'round-trip'].map(x => ({
  label: x,
  value: x,
}));
const timeOptions = ['days', 'weeks', 'months'].map(x => ({
  label: x,
  value: x,
}));
const destinationLocations = destinations;
export {
  destinationLocations,
  departureLocations, 
  typeOptions, 
  timeOptions
}