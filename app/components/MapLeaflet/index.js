/**
 *
 * MapLeaflet
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  GeoJSON,
  Map,
  // Marker,
  Polyline,
  // Popup,
  TileLayer,
} from 'react-leaflet';
import './leaflet.css';
const GeographicLib = require('geographiclib');
const airportCoordinates = require('../../../data/airportCoordinates.js');
const countriesGeo = require('../../../data/countriesGeoJSON.js');
const { Geodesic } = GeographicLib;
const geod = GeographicLib.Geodesic.WGS84;
const gradients = ['#0CFF15', '#DFE80B', '#FFBF19', '#E85C0B', '#FF0C39'];
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const credits = `&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors`;
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// HELPER FUNCTIONS -----------------------------------------------------------
const selectCheapestFlightPerDestination = flights => {
  const onePerLoc = {};

  flights.forEach(flight => {
    if (!onePerLoc[flight.to_id]) {
      onePerLoc[flight.to_id] = flight;
    } else if (flight.price < onePerLoc[flight.to_id]) {
      onePerLoc[flight.to_id] = flight;
    }
  });

  return onePerLoc;
};

const makePolyline = (from, to) => {
  const path = [];
  const inverseLine = geod.InverseLine(from[0], from[1], to[0], to[1]);
  const ds = 5000;
  const n = Math.ceil(inverseLine.s13 / ds);
  for (let i = 0; i <= n; i++) {
    const s = Math.min(ds * i, inverseLine.s13);
    const r = inverseLine.Position(s, Geodesic.STANDARD | Geodesic.LONG_UNROLL);
    const coord = [r.lat2.toFixed(5), r.lon2.toFixed(5)];
    path.push(coord);
  }
  return path;
};

// const makePolylines = (fromLatLong, destinations) =>
//   destinations.map(({ heatColor, id, latLong }) => {
//     const path = makePolyline(fromLatLong, latLong);
//     return (
//       <div key={id}>
//         <Marker position={latLong}>
//           <Popup>{id}</Popup>
//         </Marker>
//         <Polyline color={heatColor} positions={path} />
//       </div>
//     );
//   });

const makeDestsArray = (fromLatLong, itineraries) => {
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
      id: itineraries[location].to_id,
      latLong: airportCoordinates[location],
      price: itineraries[location].price,
      distance: distance.s12.toFixed(3),
      country: itineraries[location].country.name,
    });
  });

  const priceBands = makePriceBands(destinations);

  // Add the color of the polyline to each object
  destinations.forEach(dest => {
    let i;
    for (i = 0; i < priceBands.length; i++) {
      if (dest.price <= priceBands[i]) {
        break;
      }
    }
    dest.heatColor = gradients[i];
  });

  // Sort by price so that we can color code from most economical to least
  return destinations.sort((a, b) => a.price > b.price);
};

const findFarthestDest = destsArray =>
  destsArray.reduce(
    (accumulator, destination) => {
      if (destination.distance > accumulator.distance) {
        return destination;
      }
      return accumulator;
    },
    { distance: 0 },
  );

const countryBorderStyles = {
  stroke: true,
  color: '#1138FF',
  opacity: 0.8,
  weight: 2,
  dashArray: '1',
  fill: true,
  fillColor: '#A30CE8',
  fillOpacity: 0.4,
};

const handleStyle = feature => ({
  borderSize: 1,
  color: feature.color,
  fillOpacity: 0.5,
  stroke: false,
});

function makePriceBands(destsArray) {
  const gap = destsArray[destsArray.length - 1].price - destsArray[0].price;
  const bands = [Math.ceil(destsArray[0].price + gap / 5)];

  // Math.ceil is required to avoid rounding errors which result in
  // some polylines (the most expensive one) not rendering
  for (let i = 1; i < 5; i++) {
    bands.push(Math.ceil(bands[i - 1] + gap / 5));
  }

  return bands;
};

// END HELPER FUNCTIONS -------------------------------------------------------

/* eslint-disable react/prefer-stateless-function */
class MapLeaflet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryHighlighted: null,
    };
    this.highlightCountry = this.highlightCountry.bind(this);
    this.resetHighlightCountry = this.resetHighlightCountry.bind(this);
    this.onEachFeature = this.onEachFeature.bind(this);
  }

  highlightCountry(e) {
    const layer = e.target;

    this.setState({ countryHighlighted: layer.feature.properties.country });

    layer.setStyle({
      borderSize: 3,
      stroke: true,
      fillOpacity: 0.8,
    });

    // if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    //   layer.bringToFront();
    // }
  }

  resetHighlightCountry(e) {
    this.setState({ countryHighlighted: null });
    const layer = e.target;
    layer.setStyle({
      borderSize: 1,
      stroke: false,
      fillOpacity: 0.5,
    });
  }

  onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
      layer.bindPopup(feature.properties.country);
      layer.on({
        mouseover: this.highlightCountry,
        mouseout: this.resetHighlightCountry,
      });
    }
  }

  render() {
    // const boundsOptions = { padding: [5, 5] }; // should create extra space around the edges of the map (not working)
    const fromLatLong = airportCoordinates[this.props.flights[0].from_id];
    const cheapestPerDest = selectCheapestFlightPerDestination(this.props.flights);
    const destsArray = makeDestsArray(fromLatLong, cheapestPerDest);
    const farthestDestination = findFarthestDest(destsArray); // to be used to center the map and set the zoom
    const targetCountries = destsArray.map(destination => destination.country);
    const { countryHighlighted } = this.state;

    let polyline = null;

    if (countryHighlighted) {
      // Simply grab the first flight in our list that matches highlighted country
      // Will not draw polyline correctly if more than one airport in highlighted country
      const flightToCountry = this.props.flights.find(flight => flight.country.name === countryHighlighted);
      const toLatLong = airportCoordinates[flightToCountry.to_id];
      const path = makePolyline(fromLatLong, toLatLong);
      polyline = <Polyline positions={path} />;
    }

    const featuresToUse = countriesGeo.features.filter(obj =>
      targetCountries.includes(obj.properties.country)
    );

    featuresToUse.forEach(feature => {
      const fill = destsArray.find(
        dest => dest.country === feature.properties.country,
      ).heatColor;
      feature.color = fill;
    });

    const destinationCountries = {
      type: 'FeatureCollection',
      features: featuresToUse,
    };

    return (
      <Map
        center={fromLatLong}
        bounds={[fromLatLong, farthestDestination.latLong]}
        // boundsOptions={boundsOptions}
      >
        <TileLayer url={tileURL} attribution={credits} />
        <GeoJSON
          onEachFeature={this.onEachFeature}
          style={handleStyle}
          data={destinationCountries}
        />
        {polyline}
      </Map>
    );
  }
}

MapLeaflet.propTypes = {
  flights: PropTypes.object,
};

export default MapLeaflet;
