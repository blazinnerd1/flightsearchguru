import { take, call, put, select, takeLatest } from 'redux-saga/effects';



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

// worker saga
// export function* fetchFlights() {
//   const requestURL = `http://localhost:3000/graphql?query=${graphqlquery}`;

//   try {


//   } catch (err) {
//     console.log('err', err);
//     yield put(geodataError(err));
//   }
// }


// watcher saga
export default function* defaultSaga() {
  // yield takeLatest(LOAD_GEODATA, getGeodata);
}
