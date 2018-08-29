/**
 *
 * PriceAlert
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
import makeSelectPriceAlert from './selectors';
import { makeSelectSessionId, makeSelectUser } from '../Login/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { CREATE_PRICE_ALERT } from './constants';
import { makeSelectSearchParams } from '../SearchResults/selectors';

import { parseDestinations } from '../SearchBar/buildSearchQuery';


// REMOVE FOR PRODUCTION
import { USER_ID, USER_EMAIL, USER_NAME, USER_PICTURE } from "../../../config.js"


/* eslint-disable react/prefer-stateless-function */
export class PriceAlert extends React.Component {
  constructor(props) {
    super(props);
    const { /*pricealert,*/ session_id, /*user*/ } = props;

///////////////////////////////////////////
// TEMP DATA

    this.user = {
      id: USER_ID,
      email: USER_EMAIL,
      name: USER_NAME,
      image: USER_PICTURE,
    };
////////////////////////////////////////////////////

    const queryObj = JSON.parse(decodeURI(window.location.href.split('=')[1]));
    const { flightType, departureTimeType, departureTimes, departingAirport, destinations } = queryObj;

    // console.log('+++++++++++++++++++++++++++++++++++++++++++++');
    // console.log(queryObj);

    const destinationsDisplay = destinations.map(dest => dest.optionString);
    const parsedDestinations = parseDestinations(destinations);

    this.state = {
      searchParams: this.searchParams,
      session_id,
      user: this.user,
      // user: {
      //   id: USER_ID,
      //   email: USER_EMAIL,
      //   name: USER_NAME,
      //   image: USER_PICTURE,
      // },
      priceAlertForm: {
        user_id: '',
        title: '',
        flight_type: 'airports',
        departing: departingAirport.airport, 
        destinationsDisplay,
        destinations: parsedDestinations, 
        // destinations: ["AMS"],
        dates: departureTimes,
        target_price: null,
      },
      priceAlerts: [],
    };

    this.submitPriceAlert = this.submitPriceAlert.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
  }

  async submitPriceAlert(e) {
    e.preventDefault();

    const newFormState = Object.assign({}, this.state.priceAlertForm);
    newFormState.user_id = this.state.user.id;
    await this.setState({ priceAlertForm: newFormState });

    console.log(this.state.priceAlertForm);
    this.props.createPriceAlert(this.state.priceAlertForm);
  }

  onTitleChange(e) {
    e.preventDefault();
    const newFormState = Object.assign({}, this.state.priceAlertForm);
    newFormState.title = e.target.value;
    this.setState({ priceAlertForm: newFormState });
  }

  onPriceChange(e) {
    e.preventDefault();
    const newFormState = Object.assign({}, this.state.priceAlertForm);
    newFormState.target_price = parseInt(e.target.value); // may have to change this to parseFloat
    this.setState({ priceAlertForm: newFormState });
  }


  // function to retrieve price alerts


  // function to delete price alert


  // function to modify price alerts


  render() {
    // if no session_id ask user to sign in
    if (!this.state.session_id) {
      document.getElementById('googleloginbutton').children[0].click();
      return <div>Please log in to view Price Alerts</div>
    }

    const { departing, destinationsDisplay, dates, title, target_price } = this.state.priceAlertForm;

    const formattedDestinations = destinationsDisplay.join(', ');

    // FIX LATER
    const formattedDates = dates.join(', ');

    const priceAlertForm = (
      <form 
        onSubmit={this.submitPriceAlert}
        style={{
          padding: "100px"
        }}
      >
        <strong>Create A New Price Alert</strong>
        <div>
          Price Alert Name:
          <input
            type="text"
            onChange={this.onTitleChange} 
            value={title} 
            style={{ borderBottom: "solid black 1px", width: "200px"}}
            required
          />
        </div>
        <div>Departing: {departing}</div>
        <div>Destination(s): {formattedDestinations}</div>
        <div>Date(s): {formattedDates}</div>
        <div>
          Target Price: $
          <input 
            type="number"
            onChange={this.onPriceChange} 
            value={target_price} 
            style={{ borderBottom: "solid black 1px", width: "100px"}}
            required
          />
        </div>
        <button type="submit" style={{ border: "solid black 1px"}}>
          Create Price Alert
        </button>
      </form>

    );
    
    return (
      <div>
        <div>
          {priceAlertForm}
        </div>
        {/* <div>
          Display saved price alerts
        </div> */}
      </div>
    );
  }
}

PriceAlert.propTypes = {
  pricealert: PropTypes.object,
  session_id: PropTypes.string,
  user: PropTypes.object,
  createPriceAlert: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // pricealert: makeSelectPriceAlert(),
  session_id: makeSelectSessionId(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    createPriceAlert: priceAlert => dispatch({
      type: CREATE_PRICE_ALERT,
      priceAlert,
    }),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'priceAlert', reducer });
const withSaga = injectSaga({ key: 'priceAlert', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PriceAlert);
