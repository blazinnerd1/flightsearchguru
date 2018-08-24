/**
 *
 * SplashPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { countries, cities} from '../../../data/data'
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Teaser extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {
      country : ''
    }

  }
  componentDidMount(){
    const city = cities.find(city => city.airport === this.props.flight.to_id)
    const country = countries.find(country => country.id === city.id_countries);
    this.setState({country })
  }

  render() {
    const { flight } = this.props;
    const {country} = this.state;
    
    return <div><img src={`images/locationPhotos/${flight.to_id}.jpg`} />
        <div>{`AUS to ${flight.to_id} $${flight.price} in ${country.name}`}</div>
      </div>;
  }
}

Teaser.propTypes = {
  flight: PropTypes.object
};
export default Teaser