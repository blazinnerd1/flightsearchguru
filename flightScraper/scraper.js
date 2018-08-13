const axios = require('axios');
const datefns = require('date-fns');
const WAITTIME = 10000;
const validAirports = ["AMS", 
  "ARN", "BRN", "CMB", "CPH", "HND", "LHR", "MEX", "MCT", "MVD", "OSL", "ZRH", "WDH", "BTS", "ABJ", "ABV", "ACC", "ADD", "AHN", "ALG", "AMM", "API", "ASB", "ASM", "ASU", "AUH", "BAH", "BAI", "BCV", "BEG", "BEY", "BGF", "BGI", "BGW", "BJL", "BJM", "BKK", "BKO", "BML", "BOG", "BPS", "BSB", "BUD", "BWN", "BZV", "CAI", "CBR", "CCS", "CGK", "CIA", "CKY", "CPT", "CRL", "CVM", "DAC", "DAM", "DAR", "DEL", "DIL", "DKR", "DMK", "DOH", "DUB", "DYU", "EBB", "ESB", "EVN", "FIH", "FNA", "FNJ", "FRU", "FUN", "GBE", "GGE", "GUA", "HAN", "HAV", "HEL", "HIR", "HRE", "IAD", "ICN", "IEV", "INU", "ISB", "IXL", "IXZ", "JIB", "JUB", "KBL", "KGL", "KIV", "KRT", "KTM", "KUL", "KWI", "LAD", "LBV", "LCA", "LEU", "LFW", "LIS", "LJU", "LLH", "LLW", "LPB", "LUN", "LUX", "MAD", "MAJ", "MGA", "MGQ", "MHP", "MLA", "MLE", "MNL", "MPM", "MRU", "MSU", "MUC", "MZB", "NAS", "NDJ", "NIM", "NKC", "OTP", "OUA", "OXB", "PAP", "PBH", "PBM", "PEK", "PMV", "PNH", "PNI", "POM", "POS", "POX", "PRG", "PRN", "PTY", "PUW", "RBA", "REO", "RGN", "RIX", "RKV", "ROB", "ROR", "ROX", "RUH", "SAH", "SCQ", "SDQ", "SGU", "SHO", "SIN", "SJC", "SJJ", "SKB", "SKP", "SOF", "SSG", "SVD", "TAS", "TBS", "TBU", "TGD", "TGU", "THR", "TIA", "TIP", "TLL", "TLV", "TMS", "TNR", "TRW", "TSA", "TSE", "TUN", "UIO", "ULN", "UVF", "VIE", "VNO", "VTE", "WIL", "WLG", "WMI", "YAO", "YGK", "YOW", "YSJ", "YVA", "ZAG", "ZSA"];

  // USED FOR LOGGING PROGRESS
let totalQueries;
let queries = 0;

if (!process.env.API_FAREPORTALLABS) throw new Error('no api key specified')
let APIKEY = `Basic ${process.env.API_FAREPORTALLABS}`
console.log('using api key', APIKEY)

// HELPER FUNCTIONS
// expects yyyy-mm-dd, returns next day
const addDay = d => datefns.format( datefns.addDays(d, 1),'YYYY-MM-DD' );
const progress = () => Math.floor(queries/totalQueries*10000)/100

// OPEN DATABASE CONNECTION
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.FLIGHTS_DBHOST,
    user: process.env.FLIGHTS_DBUSERNAME,
    password: process.env.FLIGHTS_DBPASSWORD,
    database: process.env.FLIGHTS_DBNAME,
  },
});

const addFlightToDB = async (from_id,to_id,departing,price)=>{
  const created_at = new Date()
  let flight = { 
    from_id,
    to_id,
    departing,
    price,
    created_at
  }
  return knex('oneway').insert(flight);
}

// PRINTS OUT A FLIGHT TO CONSOLE
const LOGCHEAPEST = (cheapestFlight)=>{

    const searchDuration = Date.now() - cheapestFlight.starttime;
    let priceMSG = cheapestFlight.price?cheapestFlight.price : 'ERROR'
    console.log(`${cheapestFlight.departing}\t${cheapestFlight.from}\t${cheapestFlight.to}\t$${priceMSG}\t${searchDuration}ms\t${progress()}`);

  if (!cheapestFlight.price) {
    console.log(cheapestFlight.error);
  }
}

const getOneWayFlight = (fromAirport, toAirport, departureDate) => {
  return new Promise((res,rej)=>{
 
    const body = {
      FlightSearchRequest: {
        Adults: 1,
        Child: 0,
        Seniors: 0,
        InfantInLap: 0,
        InfantOnSeat: 0,
        Youths: 0,
        Kid: 0,
        TypeOfTrip: 'ONEWAYTRIP',
        ClassOfService: 'ECONOMY',
        SearchAlternateDates: false,
        FromTime: null,
        ToTime: null,
        SegmentDetails: [
          {
            Origin: `${fromAirport}`,
            Destination: `${toAirport}`,
            DepartureDate: `${departureDate}`,
            DepartureTime: '0100',
          },
        ],
      },
      ResponseVersion: 'VERSION41',
    };
    var CancelToken = axios.CancelToken;
    axios({
      method: 'post',
      url:
        'https://api-dev.fareportallabs.com/air/api/search/searchflightavailability',
      data: body,
      timeout: WAITTIME,
      headers: {
        Authorization: APIKEY,
        'Content-Type': 'application/json',
      },
    })
      .then(result => {
        try {
          const flightPrices = result.data.FlightResponse.FpSearch_AirLowFaresRS.SegmentReference.RefDetails.map(x => x.PTC_FareBreakdown.Adult.TotalAdultFare);
          const cheapestPrice = Math.floor(Math.min(...flightPrices));
          res({
            from: fromAirport,
            to: toAirport,
            departing: departureDate,
            price: cheapestPrice,
          });
        } catch (err) {
          if (res.data && res.data.FlightResponse && res.data.FlightResponse.ErrorReport) {
            res({
              price: false,
              error: res.data.FlightResponse.ErrorReport,
              from: fromAirport,
              to: toAirport,
              departing: departureDate,
            });
          }
          res({
            price: false,
            error: err,
            from: fromAirport,
            to: toAirport,
            departing: departureDate,
          });
        }
      })
      .catch(err => {
        res({
          price: false,
          error: err,
          from: fromAirport,
          to: toAirport,
          departing: departureDate,
        });});
});
}


const getAllFlightsBetweenAirportsBetweenDates = async (
  fromAirport,
  toAirport,
  startingDate,
  endingDate,
) => {
  if (!datefns.isAfter(endingDate, startingDate))
    throw new Error('ending date must come after the starting date');
  const dates = [startingDate];
  const terminal = addDay(endingDate);
  let next = addDay(startingDate);
  do {
    dates.push(next);
    next = addDay(next);
  } while (next !== terminal);

  for (let date of dates) {
    let starttime = Date.now()
    let cheapestFlight =  await getOneWayFlight(fromAirport, toAirport, date);
    cheapestFlight.starttime = starttime;
    queries++;
    if (cheapestFlight.price) {
      try{
        await addFlightToDB(cheapestFlight.from, cheapestFlight.to, cheapestFlight.departing, cheapestFlight.price)
      }catch(err){
        console.log(err)
      }
    }
    LOGCHEAPEST(cheapestFlight);
  }
};

const getAllFlightsFromAirportBetweenDates = async (fromAirport,startingDate,endingDate) => {

  const queriesPerAirport = datefns.differenceInCalendarDays(endingDate, startingDate)+1;
  totalQueries = queriesPerAirport*validAirports.length;
  for(let destAirport of validAirports){
    await getAllFlightsBetweenAirportsBetweenDates(fromAirport, destAirport, startingDate, endingDate )
  }

}

getAllFlightsFromAirportBetweenDates('AUS', '2018-09-01', '2019-02-28');