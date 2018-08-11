const { regions, cities, countries, airports } = require('../data/data.js');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.GEO_DBHOST,
    port: process.env.GEO_DBPORT,
    user: process.env.GEO_DBUSERNAME,
    password: process.env.GEO_DBPASSWORD,
    database: process.env.GEO_DBNAME,
  },
});

let pchain = Promise.resolve();

// ADD ALL REGIONS
let myRegions = [];

pchain = pchain.then(() => {
  const now = new Date();
  const arr = regions.map(x => ({ name: x, created_at: now, updated_at: now }));
  return knex('regions')
    .insert(arr)
    .then(() => knex('regions').select())
    .then(res => {
      myRegions = res;
      console.log('added all regions');
    });
});

// ADD ALL COUNTRIES
let myCountries;
pchain = pchain.then(() => {
  const now = new Date();
  const arr = countries.map(country => {
    const countries_region = myRegions.find(
      region => region.name === country.region,
    );
    return {
      id: country.id,
      name: country.name,
      id_regions: countries_region.id,
      created_at: now,
      updated_at: now,
    };
  });
  return knex('countries')
    .insert(arr)
    .then(() => knex('countries').select())
    .then(res => {
      myCountries = res;
      console.log('added all countries');
    });
});

// ADD ALL Airports

pchain = pchain.then(() => {
  const now = new Date();
  const arr = airports.map(airport => ({
    id: airport.id,
    name: airport.name,
    city_name: airport.city_name,
    created_at: now,
    updated_at: now,
  }));

  return knex('airports')
    .insert(arr)
    .then(() => {
      console.log('added all airports');
    });
});

// ADD ALL CITIES
pchain = pchain.then(() => {
  const now = new Date();
  const arr = cities.map(city => {
    const country = myCountries.find(
      country => country.id === city.id_countries,
    );

    return {
      name: city.name,
      id_countries: country.id,
      id_airport: city.airport,
      created_at: now,
      updated_at: now,
    };
  });

  return knex('cities')
    .insert(arr)
    .then(() => {
      console.log('added all cities');
    });
});

pchain = pchain.then(() => {
  console.log('DONE!');
  process.exit(0);
});
