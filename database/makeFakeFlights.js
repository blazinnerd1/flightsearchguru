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

// 50% of flights have one segment. the other 50% have 3 segments
const getFakeFlightInfo = ()=>{
  if(Math.random()>.5){
    return `[{"DepartureAirport":{"LocationCode":"AUS"},"ArrivalAirport":{"LocationCode":"LGW"},"Equipment":{"AirEquipType":"789"},"FlightCabin":{"CabinType":"Coach"},"FlightClass":{"ClassType":"V"},"MarketingAirline":{"Code":"DI"},"OperatedByAirline":{"CompanyText":"DI"},"Flight":{"FlightType":"O"},"OpaqueType":"0","ShowBaggageAlert":false,"StopAirports":null,"FlightNumber":"7182","DepartureDateTime":"06Sep2018T04:20 PM","ArrivalDateTime":"07Sep2018T07:25 AM","FlightDuration":"09.05","FDType":"T","StopQuantity":0,"RPH":1,"CurrentBrandName":null,"UpgradedBrandName":null,"IsUpgradable":false}]`;
  }else{
    return `[{"DepartureAirport":{"LocationCode":"AUS"},"ArrivalAirport":{"LocationCode":"JFK"},"Equipment":{"AirEquipType":"320"},"FlightCabin":{"CabinType":"Coach"},"FlightClass":{"ClassType":"K"},"MarketingAirline":{"Code":"FI"},"OperatedByAirline":{"CompanyText":"JetBlue Airways"},"Flight":{"FlightType":"O"},"OpaqueType":"0","ShowBaggageAlert":false,"StopAirports":null,"FlightNumber":"7808","DepartureDateTime":"06Sep2018T01:44 PM","ArrivalDateTime":"06Sep2018T06:30 PM","FlightDuration":"3.46","FDType":"S","StopQuantity":0,"RPH":1,"CurrentBrandName":null,"UpgradedBrandName":null,"IsUpgradable":false},{"DepartureAirport":{"LocationCode":"JFK"},"ArrivalAirport":{"LocationCode":"KEF"},"Equipment":{"AirEquipType":"76W"},"FlightCabin":{"CabinType":"Coach"},"FlightClass":{"ClassType":"K"},"MarketingAirline":{"Code":"FI"},"OperatedByAirline":{"CompanyText":"FI"},"Flight":{"FlightType":"O"},"OpaqueType":"0","ShowBaggageAlert":false,"StopAirports":null,"FlightNumber":"614","DepartureDateTime":"06Sep2018T08:20 PM","ArrivalDateTime":"07Sep2018T05:55 AM","FlightDuration":"5.35","FDType":"S","StopQuantity":0,"RPH":2,"CurrentBrandName":null,"UpgradedBrandName":null,"IsUpgradable":false},{"DepartureAirport":{"LocationCode":"KEF"},"ArrivalAirport":{"LocationCode":"LGW"},"Equipment":{"AirEquipType":"75W"},"FlightCabin":{"CabinType":"Coach"},"FlightClass":{"ClassType":"K"},"MarketingAirline":{"Code":"FI"},"OperatedByAirline":{"CompanyText":"FI"},"Flight":{"FlightType":"O"},"OpaqueType":"0","ShowBaggageAlert":false,"StopAirports":null,"FlightNumber":"470","DepartureDateTime":"07Sep2018T07:45 AM","ArrivalDateTime":"07Sep2018T11:45 AM","FlightDuration":"3.0","FDType":"S","StopQuantity":0,"RPH":3,"CurrentBrandName":null,"UpgradedBrandName":null,"IsUpgradable":false}]`;
  }


}

const addAll = async () => {
  const daysAhead = 50;
  const date = moment();
  let que = [];
  for (let i = 0; i < daysAhead; i++) {
    date.add(1, 'day');
    const departing = date.format('YYYY-MM-DD');
    for (let j = 0; j < airports.length; j++) {
      const airport = airports[j];
      if (airport.name !== 'AUS') {
        const created_at = new Date();

        const flight = {
          from_id: 'AUS',
          to_id: airport.id,
          departing,
          price: Math.floor(Math.random() * 300 + 300),
          info: getFakeFlightInfo(),
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
