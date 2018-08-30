import data, { supportedDepartingAirports } from '../../../data/data';

const airportsInRegionDict = {};
data.regions.forEach(region=>{
  airportsInRegionDict[region] = [];
});

const airportsInCountryDict = {};
data.countries.forEach(country => {
  airportsInCountryDict[country.name] = [];
});

let destinations = [];

const anywhere = {
  value: 'anywhere|anywhere', label: 'anywhere|anywhere|🌎',
  optionString: `Anywhere 🌎`,
  isAnywhere:true,
  labelObj: {
    baseString: 'Anywhere',
    tooltipString: false,
  },
};
destinations.push(anywhere);

const regions = data.regions.map(region => ({
  value: `region|${region}`,
  label: `region|${region}`,
  optionString: `${region}`,
  isRegion:true,
  labelObj: {
    baseString: region,
    tooltipString: false,
  },
}));
destinations = destinations.concat(regions);

const countries = data.countries.map(country => ({
  value: `country|${country.id}`,
  label: `country|${country.name}|${country.emoji}`,
  region: country.region,
  isCountry:true,
  optionString: `${country.name} ${country.emoji}`,
  labelObj: {
    baseString: country.name,
    tooltipString: false
  },
}));
destinations = destinations.concat(countries);

const cities = data.cities.map(city => {
  let airport_name = '';
  let country_name = '';
  let airport_id = ''
  let region_name = '';

  for (let airport of data.airports) {
    if (airport.id === city.airport) {
      airport_name = airport.name;
      airport_id = airport.id;
      break;
    }
  }

  for (let country of data.countries) {
    if (country.id === city.id_countries) {
      country_name = country.name;
      region_name = country.region;

      airportsInRegionDict[region_name].push(airport_id)
      airportsInCountryDict[country_name].push(airport_id)
      break;
    }
  }

  return { 
    region:region_name, 
    isCity:true, 
    airport:city.airport, 
    country:country_name, 
    value: `city|${city.airport}`, 
    label: `city|${city.airport}|${city.name}|${airport_name}|${country_name}|${region_name}`, 
    optionString: `${city.airport} ${city.name}`, 
    labelObj: { 
      baseString: city.airport, 
      tooltipString: `${city.name} ${country_name}` 
    },
  };
});

/*
anywhere|anywhere|globe
region|name
country|name|emoji
city|airportcode|cityname|airportname|countryname|regionname
*/

destinations = destinations.concat(cities);

const departureLocations = cities.filter(city =>
  supportedDepartingAirports.includes(city.value.split('|')[1]),
);

const typeOptions = ['One-way', 'Round-trip'].map(x => ({
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
  timeOptions,
  airportsInRegionDict,
  airportsInCountryDict
}