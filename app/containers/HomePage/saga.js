/**
 * Gets the geodata from our site
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_GEODATA } from 'containers/HomePage/constants';
import { geodataLoaded, geodataError } from 'containers/HomePage/actions';
import request from 'utils/request';

const graphqlquery = `
{
  regions {
    id
    name
  }
  countries {
    id
    name
  }
  cities{
    name
    country{
      name
    }
    airport{
      id
      name
    }
  }
}
`;

/**
 * Geodata request/response handler
 */
export function* getGeodata() {
  // Select username from store
  // const geo = yield select(makeSelectGeodata());
  const requestURL = `http://localhost:3000/graphql?query=${graphqlquery}`;
  try {
    // Call our request helper (see 'utils/request')
    const geodataFromAPI = yield call(request, requestURL);
    console.log(geodataFromAPI)
    console.log(JSON.stringify(geodataFromAPI.data))
    const regions = geodataFromAPI.data.regions.map(region => ({
      value: region.id,
      label: region.name,
    }));
    const countries = geodataFromAPI.data.countries.map(country => ({
      value: country.id,
      label: country.name,
    }));
    const cities = geodataFromAPI.data.cities.map(city => ({
      id: city.airport.id,
      label: `${city.airport.id}|${city.name}|${city.airport.name}|${
        city.country.name
      }`,
    }));

    yield put(geodataLoaded({regions, countries, cities}));
  } catch (err) {
    console.log('err', err);
    yield put(geodataError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* geoData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_GEODATA, getGeodata);
}
