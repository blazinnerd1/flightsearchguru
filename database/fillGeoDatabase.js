require('dotenv').config();
const {
  regions, cities, countries, airports,
} = require('../data/data.js');

if (!process.env.GEO_DBHOST) throw ('no database host specified');
if (!process.env.GEO_DBUSERNAME) throw ('no database user specified');
if (!process.env.GEO_DBPASSWORD) throw ('no database password specified');
if (!process.env.GEO_DBNAME) throw 'no database name specified';
if (!process.env.GEO_DBPORT) throw 'no database port specified';

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
const regionID = {};
// ADD ALL REGIONS
for (const region of regions) {
  pchain = pchain.then(() => {
    const now = new Date();
    return knex('regions').insert({ name: region, created_at: now, updated_at: now })
      .then(() => knex('regions').where('name', region).select().first()).then(
        ({ id }) => {
          regionID[region] = id;
          console.log('added', region);
        },
      );
  });
}


// ADD ALL COUNTRIES
for (const country of countries) {
  pchain = pchain
    .then(() => {
      const now = new Date();
      return knex('countries')
        .insert({
          id: country.id,
          name: country.name,
          id_regions: regionID[country.region],
          created_at: now,
          updated_at: now,
        })
        .then(() => console.log('added', country.name));
    });
}

const cityID = {};


// ADD ALL CITIES
for (const city of cities) {
  pchain = pchain
    .then(() => {
      const now = new Date();
      return knex('cities')
        .insert({
          name: city.name,
          id_countries: city.id_countries,
          created_at: now,
          updated_at: now,
        })
        .then(() => knex('cities').where('name', city.name).select().first()).then(
          ({ id }) => {
            cityID[city.name] = id;
            console.log('added', city.name);
          },
        );
    });
}


// ADD ALL Airports
for (const airport of airports) {
  pchain = pchain
    .then(() => {
      const now = new Date();
      return knex('airports')
        .insert({
          id: airport.id,
          name: airport.name,
          id_cities: cityID[airport.city_name],
          created_at: now,
          updated_at: now,
        })
        .then(() => console.log('added', airport.name));
    });
}

pchain = pchain.then(() => {
  console.log('DONE!');
});
