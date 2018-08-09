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
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return countries.filter(country => country.regionId === parent.id);
      },
    },
  }),
});

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    // member of one region
    region: {
      type: RegionType,
      resolve(parent, args) {
        return regions.find(region => region.id === parent.id);
      },
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve(parent, args) {
        return cities.filter(city => city.countryId === parent.id);
      },
    },
  }),
});

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    // belong to one country
    country: {
      type: CountryType,
      resolve(parent, args) {
        return countries.find(country => country.id === parent.id);
      },
    },
    airports: {
      type: new GraphQLList(AirportType),
      resolve(parent, args) {
        return airports.filter(airport => airport.cityId === parent.id);
      },
    },
  }),
});

const AirportType = new GraphQLObjectType({
  name: 'Airport',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    // belond to one city
    city: {
      type: CityType,
      resolve(parent, args) {
        return cities.find(city => city.id === parent.cityId);
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
        console.log(typeof args.id);
        console.log(regions);
        return regions.find((region) => {
          console.log(region);
          console.log(typeof region.id);
          return args.id === region.id;
        });
      },
    },
    regions: {
      type: new GraphQLList(RegionType),
      resolve(parent, args) {
        return regions;
      },
    },
    country: {
      type: CountryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return countries.find(country => args.id === country.id);
      },
    },
    countries: {
      type: new GraphQLList(CountryType),
      resolve(parent, args) {
        return countries;
      },
    },
    city: {
      type: CityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return cities.find(city => args.id === city.id);
      },
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve(parent, args) {
        return cities;
      },
    },
    airport: {
      type: AirportType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return airports.find(airport => args.id === airport.id);
      },
    },
    airports: {
      type: new GraphQLList(AirportType),
      resolve(parent, args) {
        return airports;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});





const regions = [{ id: '1', name: 'Europe' }];
const countries = [
  { id: '1', name: 'Netherlands', regionId: '1', code: 'NLD' }, 
  { id: '2', name: 'Sweden', regionId: '1', code: 'SWE' }, 
  { id: '3', name: 'Switzerland', regionId: '1', code: 'CHE' }
];
const cities = [
  { id: '1', name: 'Amsterdam', countryId: '1' }, 
  { id: '2', name: 'Stockholm', countryId: '2' }, 
  { id: '3', name: 'Bern', countryId: '3' },
];
const airports = [
  { id: '1', name: 'Amsterdam Airport Schiphol', cityId: '1', code: 'AMS' },
  { id: '2', name: 'Stockholm-Arlanda Airport', cityId: '2', code: 'ARN' }, 
  { id: '3', name: 'Bern Belp Airport', cityId: '3', code: 'BRN' },
];
