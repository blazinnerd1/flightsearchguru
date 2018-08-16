// This is the main GraphQL file.
// It defines our types and also leverages knex to reach into our PostgresQL (Amazon RDS)
//   and fetch the requested data.

const format = require('date-fns/format');
const client = 'pg';
const version = '9.6.6';

const pgGeo = require('knex')({
  client,
  version,
  connection: {
    host: process.env.GEO_DBHOST,
    port: process.env.GEO_DBPORT,
    user: process.env.GEO_DBUSERNAME,
    password: process.env.GEO_DBPASSWORD,
    database: process.env.GEO_DBNAME,
  },
});

const pgFlights = require('knex')({
  client,
  version,
  connection: {
    host: process.env.FLIGHTS_DBHOST,
    port: process.env.FLIGHTS_DBPORT,
    user: process.env.FLIGHTS_DBUSERNAME,
    password: process.env.FLIGHTS_DBPASSWORD,
    database: process.env.FLIGHTS_DBNAME,
  },
});

const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');

const RegionType = new GraphQLObjectType({
  name: 'Region',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    created_at: { type: GraphQLString },
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return pgGeo('countries').where('id_regions', parent.id);
      },
    },
  }),
});

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    id_regions: { type: GraphQLID },
    updated_at: { type: GraphQLString },
    created_at: { type: GraphQLString },
    region: {
      type: RegionType,
      resolve(parent, args) {
        return pgGeo('regions')
          .where('id', parent.id_regions)
          .first();
      },
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve(parent, args) {
        return pgGeo('cities').where('id_countries', parent.id);
      },
    },
  }),
});

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    created_at: { type: GraphQLString },
    id_countries: { type: GraphQLString },
    // belong to one country
    country: {
      type: CountryType,
      resolve(parent, args) {
        return pgGeo('countries')
          .where('id', parent.id_countries)
          .first();
      },
    },
    airport: {
      type: AirportType,
      resolve(parent, args) {
        return pgGeo('airports').where('id', parent.id_airport).first();
      },
    },
  }),
});

const AirportType = new GraphQLObjectType({
  name: 'Airport',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    city_name: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    created_at: { type: GraphQLString },
    city: {
      type: CityType,
      resolve(parent, args) {
        return pgGeo('cities')
          .where('id', parent.city_name)
          .first();
      },
    },
    flights: {
      type: new GraphQLList(FlightOneWayType),
      description: 'All flights to or from this airport.',
      resolve(parent, args) {
        return pgFlights('oneway')
          .where('from_id', parent.id)
          .orWhere('to_id', parent.id);
      },
    },
    flightsOut: {
      type: new GraphQLList(FlightOneWayType),
      resolve(parent, args) {
        return pgFlights('oneway').where('from_id', parent.id);
      },
    },
    flightsIn: {
      type: new GraphQLList(FlightOneWayType),
      resolve(parent, args) {
        return pgFlights('oneway').where('to_id', parent.id);
      },
    },
  }),
});

const FlightOneWayType = new GraphQLObjectType({
  name: 'OneWayFlight',
  fields: () => ({
    id: { type: GraphQLInt },
    from_id: { type: GraphQLString },
    to_id: { type: GraphQLString },
    departing: { type: GraphQLString },
    price: { type: GraphQLInt },
    created_at: { type: GraphQLString },
    info: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    region: {
      type: RegionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return pgGeo('regions')
          .where('id', args.id)
          .first();
      },
    },
    regions: {
      type: new GraphQLList(RegionType),
      resolve(parent, args) {
        return pgGeo.select().table('regions');
      },
    },
    country: {
      type: CountryType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return pgGeo('countries')
          .where('id', args.id)
          .first();
      },
    },
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return pgGeo.select().table('countries');
      },
    },
    city: {
      type: CityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return pgGeo('cities')
          .where('id', args.id)
          .first();
      },
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve(parent, args) {
        return pgGeo.select().table('cities');
      },
    },
    airport: {
      type: AirportType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return pgGeo('airports')
          .where('id', args.id)
          .first();
      },
    },
    airports: {
      type: new GraphQLList(AirportType),
      resolve(parent, args) {
        return pgGeo.select().table('airports');
      },
    },
    oneWayFlight: {
      type: FlightOneWayType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return pgFlights('oneway')
          .where('id', args.id)
          .first();
      },
    },
    oneWayFlightsToAirports: {
      type: new GraphQLList(FlightOneWayType),
      description: `Send an array of airport codes, e.g. ["AUS"] or ["LHR", "IAD"].
        Sending only a 'from' or 'to' will also work.`,
      args: {
        from: { type: GraphQLString },
        to: { type: new GraphQLList(GraphQLString) },
        dates: { type: new GraphQLList(GraphQLString) },
      },
      resolve(parent, { from, to, dates }) {
        if (from && to) {
          return pgFlights('oneway')
          .whereRaw(`from_id = '${from}'
                     AND to_id in (${transformStringArray(to)})
                     AND date(departing) in (${transformDateArray(dates)})`
          )
          .orderBy('price', 'asc');
        }
      },
    },
    oneWayFlightsToCities: {
      type: new GraphQLList(FlightOneWayType),
      description:
        'Send an array of city names (fully spelled out), e.g. ["Amsterdam"] or ["Bern", "London"]',
      args: {
        from: { type: GraphQLString },
        to: { type: new GraphQLList(GraphQLString) },
        dates: { type: new GraphQLList(GraphQLString) },
      },
      resolve(parent, { from, to, dates }) {
        return pgGeo('airports').whereIn('city_name', to) // Narrow the list of airports to match the cities requested
        .then(airports => {
          const toIDs = airports.map(airport => airport.id); // Convert returned records to a useable array of airport codes
          return pgFlights('oneway') 
            .whereRaw(`from_id = '${from}'
                       AND to_id in (${transformStringArray(toIDs)})
                       AND date(departing) in (${transformDateArray(dates)})`
            )
            .orderBy('price', 'asc');
        })
      },
    },
    oneWayFlightsToCountries: {
      type: new GraphQLList(FlightOneWayType),
      description:
        'Send an array of country IDs, e.g. ["JPN"] or ["MEX", "GBR"]',
      args: {
        from: { type: GraphQLString },
        to: { type: new GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        return pgGeo('cities')
          .join('countries', 'cities.id_countries', '=', 'countries.id')
          .whereIn('countries.id', args.to)
          .then(data => {
            const arrOfIDs = data.map(record => record.id_airport);
            return pgFlights('oneway')
              .whereIn('to_id', arrOfIDs)
              .andWhere('from_id', args.from);
          });
      },
    },
    oneWayFlightsToRegions: {
      type: new GraphQLList(FlightOneWayType),
      description: 'Send an array of region IDs, e.g. [1] or [1, 4, 9]',
      args: {
        from: { type: GraphQLString },
        to: { type: new GraphQLList(GraphQLID) },
      },
      resolve(parent, args) {
        return pgGeo('cities')
          .join('countries', 'cities.id_countries', '=', 'countries.id')
          .join('regions', 'countries.id_regions', '=', 'regions.id')
          .whereIn('regions.id', args.to)
          .then(data => {
            const arrOfIDs = data.map(record => record.id_airport);
            return pgFlights('oneway')
              .whereIn('to_id', arrOfIDs)
              .andWhere('from_id', args.from);
          });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

const transformDateArray = dateArray => {
  return dateArray.map(date => {
    return format(date, 'YYYY/MM/DD');
  })
    .map(date => `'${date}'`).join(',');
};

const transformStringArray = stringArray => {
  return stringArray.map(string => `'${string}'`).join(',')
};