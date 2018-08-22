/**
 *
 * MapLeaflet
 *
 */

import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './leaflet.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class MapLeaflet extends React.Component {
  render() {
    // TO DO: Center map on lat long of departure airport code
    const position = [30.1975, -97.6664]; // Lat Long for AUS.
    return (
      <Map center={position} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    );
  }
}

MapLeaflet.propTypes = {};

export default MapLeaflet;
