const moment = require('moment');
const { airports } = require('../data/data.js');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.FLIGHTS_DBHOST,
    port: process.env.FLIGHTS_DBPORT,
    user: process.env.FLIGHTS_DBUSERNAME,
    password: process.env.FLIGHTS_DBPASSWORD,
    database: process.env.FLIGHTS_DBNAME,
  },
});

const insertBatch = async arr =>
  knex('oneway')
    .insert(arr)
    .catch(err => {
      console.log(err);
      return false;
    });

const addAll = async () => {
  const daysAhead = 50;
  const date = moment();
  let que = [];
  for (let i = 0; i < daysAhead; i++) {
    date.add(1, 'day');
    const departing = date.format('YYYY-MM-DD');
    for (let j = 0; j < airports.length; j++) {
      const airport = airports[j];
      if (airport.name !== 'IAD') {
        const created_at = new Date();

        const flight = {
          from_id: 'IAD',
          to_id: airport.id,
          departing,
          price: Math.floor(Math.random() * 300 + 300),
          created_at,
        };
        que.push(flight);

        if (que.length === 500) {
          let success = await insertBatch(que);
          while (!success) {
            success = await insertBatchque;
          }
          que = [];
          const pctdone =
            Math.floor(
              ((i * airports.length + j) / (airports.length * daysAhead)) *
              10000,
            ) / 100;
          console.log(`Progress: ${pctdone}%`);
        }
      }
    }
  }
  console.log('DONE! :D');
  process.exit(0);
};

addAll();