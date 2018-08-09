// This is the main GraphQL file.
// It defines our types and also leverages knex to reach into our PostgresQL (Amazon RDS)
//   and fetch the requested data.

if (!process.env.GEO_DBHOST) throw new Error('No env var found for dbhost');
if (!process.env.GEO_DBPORT) throw new Error('No env var found for dbport');
if (!process.env.GEO_DBUSERNAME) throw new Error('No env var found for dbusername');
if (!process.env.GEO_DBPASSWORD) throw new Error('No env var found for dbpassword');
if (!process.env.GEO_DBNAME) throw new Error('No env var found for dbname');

const pg = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.GEO_DBHOST,
    port: process.env.GEO_DBPORT,
    user: process.env.GEO_DBUSERNAME,
    password: process.env.GEO_DBPASSWORD,
    database: process.env.GEO_DBNAME,
  },
});

const {
  GraphQLID,
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
        return pg('countries').where('id_regions', parent.id);
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
    // member of one region
    region: {
      type: RegionType,
      resolve(parent, args) {
        return pg('regions').where('id', parent.id_regions);
      },
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve(parent, args) {
        return pg('cities').where('id_countries', parent.id);
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
        return pg('countries').where('id', parent.id_countries);
      },
    },
    airports: {
      type: new GraphQLList(AirportType),
      resolve(parent, args) {
        return pg('airports').where('id_cities', parent.id);
      },
    },
  }),
});

const AirportType = new GraphQLObjectType({
  name: 'Airport',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    id_cities: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    created_at: { type: GraphQLString },
    // belond to one city
    city: {
      type: CityType,
      resolve(parent, args) {
        return pg('cities').where('id', parent.id_cities);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    region: {
      type: RegionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return pg('regions').where('id', args.id);
      },
    },
    regions: {
      type: new GraphQLList(RegionType),
      resolve(parent, args) {
        return pg.select().table('regions');
      },
    },
    country: {
      type: CountryType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return pg('countries').where('id', args.id);
      },
    },
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return pg.select().table('countries');
      },
    },
    city: {
      type: CityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return pg('cities').where('id', args.id);
      },
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve(parent, args) {
        return pg.select().table('cities');
      },
    },
    airport: {
      type: AirportType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return pg('airport').where('id', args.id);
      },
    },
    airports: {
      type: new GraphQLList(AirportType),
      resolve(parent, args) {
        return pg.select().table('airports');
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
