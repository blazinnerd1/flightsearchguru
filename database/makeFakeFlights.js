const datefns = require('date-fns');
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
  let date = datefns.addHours(new Date(), Math.floor(Math.random() * 3 + 1));
  let que = [];
  for (let i = 0; i < daysAhead; i++) {
    date = datefns.addDays(date, 1);
    for (let j = 0; j < airports.length; j++) {
      const airport = airports[j];
      if (airport.name !== 'AUS') {
        const route_with_day = `AUS_${airport.id}_${datefns.format(
          date,
          'YYYY-MM-DD',
        )}`;
        const created_at = new Date();
        const carriers = Math.random() > 0.5 ? '["ET","AA"]' : '["ET"]';
        const stops = Math.random() > 0.5 ? '["BFG","LOL"]' : '[""]';

        const arrivetime = datefns.addDays(
          date,
          Math.floor(Math.random() * 2 + 1),
        );

        const flight = {
          from_id: 'AUS',
          route_with_day,
          to_id: airport.id,
          departing: date,
          carriers,
          stops,
          arrivetime,
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
