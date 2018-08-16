/**
 * Gets the geodata from our site
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_GEODATA } from 'containers/HomePage/constants';
import { geodataLoaded, geodataError } from 'containers/HomePage/actions';
// import request from 'utils/request';

import data from  '../../../data/data';

// import from data file method
export function* getGeodata() {
  const regions = data.regions.map((region, index) => ({
    value: (index + 1),
    label: region,
  }));

  const countries = data.countries.map(country => ({
    value: country.id,
    label: country.name,
  }));

  const cities = data.cities.map(city => {
    let airport_name = '';
    let country_name = '';

    for (let airport of data.airports) {
      if (airport.id === city.airport) {
        airport_name = airport.name;
        break;
      }
    }

    for (let country of data.countries) {
      if (country.id === city.id_countries) {
        country_name = country.name;
        break;
      }
    }

    return ({
      id: city.airport,
      label: `${city.airport}|${city.name}|${airport_name}|${country_name}`,
    })
  });

  yield put(geodataLoaded({regions, countries, cities}));
}

// // import from geodatabase via graphql call
// const graphqlquery = `
// {
//   regions {
//     id
//     name
//   }
//   countries {
//     id
//     name
//   }
//   cities{
//     name
//     country{
//       name
//     }
//     airport{
//       id
//       name
//     }
//   }
// }
// `;

// /**
//  * Geodata request/response handler
//  */
// export function* getGeodata() {
//   // Select username from store
//   // const geo = yield select(makeSelectGeodata());
//   const requestURL = `http://localhost:3000/graphql?query=${graphqlquery}`;
//   try {
//     // Call our request helper (see 'utils/request')
//     const geodataFromAPI = yield call(request, requestURL);
    
//     const regions = geodataFromAPI.data.regions.map(region => ({
//       value: region.id,
//       label: region.name,
//     }));
//     const countries = geodataFromAPI.data.countries.map(country => ({
//       value: country.id,
//       label: country.name,
//     }));
//     const cities = geodataFromAPI.data.cities.map(city => ({
//       id: city.airport.id,
//       label: `${city.airport.id}|${city.name}|${city.airport.name}|${
//         city.country.name
//       }`,
//     }));

//     console.log('regions: ', regions);
//     console.log('countries: ', countries);
//     console.log('cities: ', cities);



//     yield put(geodataLoaded({regions, countries, cities}));
//   } catch (err) {
//     console.log('err', err);
//     yield put(geodataError(err));
//   }
// }

/**
 * Root saga manages watcher lifecycle
 */
export default function* geoData() {
  // Watches for LOAD_GEODATA actions and calls getGeodata when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_GEODATA, getGeodata);
}
