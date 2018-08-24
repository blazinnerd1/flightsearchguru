/**
 *
 * MapLeaflet
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import './leaflet.css';
const GeographicLib = require('geographiclib');
const airportCoordinates = require('../../../data/airportCoordinates.js');
const { Geodesic } = GeographicLib;
const geod = GeographicLib.Geodesic.WGS84;

// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const selectCheapestFlightPerDestination = flights => {
  const onePerLoc = {};

  flights.forEach(flight => {
    if (!onePerLoc[flight.to_id]) {
      onePerLoc[flight.to_id] = flight.price;
    } else if (flight.price < onePerLoc[flight.to_id]) {
      onePerLoc[flight.to_id] = flight.price;
    }
  });

  return onePerLoc;
};

const makePolyline = (from, to) => {
  const path = [];
  const inverseLine = geod.InverseLine(from[0], from[1], to[0], to[1]);
  const ds = 1000;
  const n = Math.ceil(inverseLine.s13 / ds);
  for (let i = 0; i <= n; i++) {
    const s = Math.min(ds * i, inverseLine.s13);
    const r = inverseLine.Position(s, Geodesic.STANDARD | Geodesic.LONG_UNROLL);
    const coord = [r.lat2.toFixed(5), r.lon2.toFixed(5)];
    path.push(coord);
  }
  return path;
};

const makePolylines = (fromLatLong, destinations) =>
  destinations.map(({ heatColor, id, latLong }) => {
    const path = makePolyline(fromLatLong, latLong);
    return (
      <div key={id}>
        <Marker position={latLong}>
          <Popup>{id}</Popup>
        </Marker>
        <Polyline color={heatColor} positions={path} />
      </div>
    );
  });

const makeDestinationsArray = (fromLatLong, itineraries) => {
  const destinations = [];

  // Add lat long, price, and distance for each airport
  Object.keys(itineraries).forEach(location => {
    const distance = geod.Inverse(
      fromLatLong[0],
      fromLatLong[1],
      airportCoordinates[location][0],
      airportCoordinates[location][1],
    );
    destinations.push({
      id: location,
      latLong: airportCoordinates[location],
      price: itineraries[location],
      distance: distance.s12.toFixed(3),
    });
  });

  return destinations;
};

const findFarthestDest = destinationsArray =>
  destinationsArray.reduce(
    (accumulator, destination) => {
      if (destination.distance > accumulator.distance) {
        return destination;
      }
      return accumulator;
    },
    { distance: 0 },
  );

/* eslint-disable react/prefer-stateless-function */
class MapLeaflet extends React.Component {
  render() {
    const { flights } = this.props;

    // Not needed while we are suppressing the _from_ marker
    // const fromId = flights[0].from_id;
    const fromLatLong = airportCoordinates[flights[0].from_id];

    // Reduce all flighgts to a list of the most economical iteneraries per destination
    const cheapestPerDest = selectCheapestFlightPerDestination(flights);
    const destinationsArray = makeDestinationsArray(
      fromLatLong,
      cheapestPerDest,
    );

    // farthestDestination will be used to center the map and set the zoom
    const farthestDestination = findFarthestDest(destinationsArray);

    // Sort by price so that we can color code from most economical to least
    destinationsArray.sort((a, b) => a.price > b.price);

    // Add the color of the polyline to each object
    destinationsArray.forEach(dest => (dest.heatColor = 'blue'));

    // Make all the lines to draw on the map
    const polyLines = makePolylines(fromLatLong, destinationsArray);

    // This oiption should create extra space around the edges of the map
    // (think padding), but it doesn't always work as expected
    const boundsOptions = {
      padding: [5, 5],
    };

    return (
      <Map
        center={fromLatLong}
        bounds={[fromLatLong, farthestDestination.latLong]}
        boundsOptions={boundsOptions}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {/* <Marker position={fromLatLong}>
          <Popup>{fromId}</Popup>
        </Marker> */}
        {polyLines}
      </Map>
    );
  }
}

MapLeaflet.propTypes = {
  flights: PropTypes.object,
};

export default MapLeaflet;
