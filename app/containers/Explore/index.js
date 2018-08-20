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
import {boundries} from './boundries'
import messages from './messages';
const loadjs = require('loadjs');

/* eslint-disable react/prefer-stateless-function */
export class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiLoaded:false
    }
    this.initialize = this.initialize.bind(this);
    this.drawMap = this.drawMap.bind(this);
    this.constructNewCoordinates = this.constructNewCoordinates.bind(this);
  }

  componentDidMount() {
    // the map
    if(!this.state.apiLoaded){
      this.setState({apiLoaded:true})
        google.maps.event.addDomListener(
            window,
            'load',
            this.initialize,
        );
    }
   
  }

  initialize() {
    const myOptions = {
      zoom: 2,
      center: new google.maps.LatLng(10, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    // initialize the map
    this.map = new google.maps.Map(
      document.getElementById('map-canvas'),
      myOptions,
    );

    // these are the map styles
    const styles = [
      {
        stylers: [{ hue: '#00ffe6' }, { saturation: -20 }],
      },
      {
        featureType: 'landscape',
        stylers: [{ hue: '#ffff66' }, { saturation: 100 }],
      },
      {
        featureType: 'road',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative.locality',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative.province',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'landscape.man_made',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'landscape.natural',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'transit',
        stylers: [{ visibility: 'off' }],
      },
    ];

    this.map.setOptions({ styles });

    // // LEGACY WAY TO GET BOUNDRIES
    // let query = 'https://www.googleapis.com/fusiontables/v1/query?';
    // query += 'sql=';
    // query += encodeURIComponent(
    //   'SELECT name, kml_4326 FROM ' + '1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ',
    // );
    // query += '&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ';
    // axios(query).then(res => {
    //   console.log(JSON.stringify(res.data));
    //   this.drawMap(res.data);
    // });
    console.log(boundries)
      this.drawMap(boundries);
  }

  drawMap(data) {
    const rows = data.rows;
    for (const i in rows) {
      if (rows[i][0] != 'Antarctica') {
        let newCoordinates = [];
        const geometries = rows[i][1].geometries;
        if (geometries) {
          for (const j in geometries) {
            newCoordinates.push(this.constructNewCoordinates(geometries[j]));
          }
        } else {
          newCoordinates = this.constructNewCoordinates(rows[i][1].geometry);
        }
        const country = new google.maps.Polygon({
          paths: newCoordinates,
          strokeColor: '#ff9900',
          strokeOpacity: 1,
          strokeWeight: 0.3,
          fillColor: '#ffff66',
          fillOpacity: 0,
          name: rows[i][0],
        });
        google.maps.event.addListener(country, 'mouseover', function() {
          this.setOptions({ fillOpacity: 0.4 });
        });
        google.maps.event.addListener(country, 'mouseout', function() {
          this.setOptions({ fillOpacity: 0 });
        });
        google.maps.event.addListener(country, 'click', function() {
          alert(this.name);
        });
        country.setMap(this.map);
      }
    }
  }

  constructNewCoordinates(polygon) {
    const newCoordinates = [];
    const coordinates = polygon.coordinates[0];
    for (const i in coordinates) {
      newCoordinates.push(
        new google.maps.LatLng(coordinates[i][1], coordinates[i][0]),
      );
    }
    return newCoordinates;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Explore</title>
          <meta name="description" content="Description of Explore" />
        </Helmet>
        <div style={{ width: '800px', height: '600px' }} id="map-canvas" />
      </div>
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
