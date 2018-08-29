/**
 *
 * Explore
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectExplore from './selectors';
import reducer from './reducer';
import saga from './saga';
import { boundries } from './boundries';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 2,
    };

    // this.initialize = this.initialize.bind(this);
    // this.drawMap = this.drawMap.bind(this);
    // this.constructNewCoordinates = this.constructNewCoordinates.bind(this);
  }

  componentDidMount() {
    // this.leafletElement.setMaxZoom(3.25);
  }

  // drawMap(data) {
  //   const rows = data.rows;
  //   for (const i in rows) {
  //     if (rows[i][0] != 'Antarctica') {
  //       let newCoordinates = [];
  //       const geometries = rows[i][1].geometries;
  //       if (geometries) {
  //         for (const j in geometries) {
  //           newCoordinates.push(this.constructNewCoordinates(geometries[j]));
  //         }
  //       } else {
  //         newCoordinates = this.constructNewCoordinates(rows[i][1].geometry);
  //       }
  //       const country = new google.maps.Polygon({
  //         paths: newCoordinates,
  //         strokeColor: '#ff9900',
  //         strokeOpacity: 1,
  //         strokeWeight: 0.3,
  //         fillColor: '#ffff66',
  //         fillOpacity: 0,
  //         name: rows[i][0],
  //       });
  //       google.maps.event.addListener(country, 'mouseover', function() {
  //         this.setOptions({ fillOpacity: 0.4 });
  //       });
  //       google.maps.event.addListener(country, 'mouseout', function() {
  //         this.setOptions({ fillOpacity: 0 });
  //       });
  //       google.maps.event.addListener(country, 'click', function() {
  //         alert(this.name);
  //       });
  //       country.setMap(this.map);
  //     }
  //   }
  // }

  // constructNewCoordinates(polygon) {
  //   const newCoordinates = [];
  //   const coordinates = polygon.coordinates[0];
  //   for (const i in coordinates) {
  //     newCoordinates.push(
  //       new google.maps.LatLng(coordinates[i][1], coordinates[i][0]),
  //     );
  //   }
  //   return newCoordinates;
  // }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

Explore.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  explore: makeSelectExplore(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'explore', reducer });
const withSaga = injectSaga({ key: 'explore', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Explore);
