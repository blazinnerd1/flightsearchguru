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


// REMOVE FOR PRODUCTION
import { USER_ID, USER_EMAIL, USER_NAME, USER_IMAGE } from "../../../config.js"


/* eslint-disable react/prefer-stateless-function */
export class PriceAlert extends React.Component {
  constructor(props) {
    super(props);
    const { /*searchParams,*/ /*pricealert,*/ session_id, /*user*/ } = props;

///////////////////////////////////////////
// TEMP DATA
    this.searchParams = {
      departingAirport: "AUS", 
      destinations: ["AMS"], 
      dates: ["09/10/2018", "9/24/2018"]
    };

    this.user = {
      id: USER_ID,
      email: USER_EMAIL,
      name: USER_NAME,
      image: USER_IMAGE,
    };
////////////////////////////////////////////////////

    this.state = {
      searchParams: this.searchParams,
      session_id,
      user: this.user,
      // user: {
      //   id: USER_ID,
      //   email: USER_EMAIL,
      //   name: USER_NAME,
      //   image: USER_IMAGE,
      // },
      priceAlertForm: {
        departingAirport: "AUS", 
        destinations: ["AMS"], 
        dates: ["09/10/2018", "9/24/2018"],
        title: '',
        targetPrice: null,
      },
      priceAlerts: [],
    };

    this.submitPriceAlert = this.submitPriceAlert.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
  }

  componentDidMount() {
    // GET SESSION
      // IF NO SESSION "CLICK" LOGIN BUTTON
    // GET USER ID
    // HIT UP LAMBDA FOR PRICE ALERTS USING USER ID
      // SET PRICE ALERTS IN STATE

    console.log('mounted====================================');


    // LOAD SESSION_ID
    const session_id = localStorage.getItem('session_id');
    console.log('session_id: ', session_id)

    // DONT THINK THIS IS NECESSARY
    // if (session_id && session_id !== 'undefined') {
    //   // this.props.verify(session_id);
    //   this.setState({ session_id });
    // }

    // LOAD USER ID

  }

  // function to click login

  // function to retrieve price alerts

  // function to save new price alert
  submitPriceAlert(e) {
    e.preventDefault();
    console.log(this.state.priceAlertForm)
    this.props.createPriceAlert(this.state.priceAlertForm);
  }

  onTitleChange(e) {
    e.preventDefault();
    const newFormState = Object.assign({}, this.state.priceAlertForm);
    newFormState.title = e.target.value;
    this.setState({
      priceAlertForm: newFormState,
    }, () => { console.log(this.state.priceAlertForm) });
  }

  onPriceChange(e) {
    e.preventDefault();
    const newFormState = Object.assign({}, this.state.priceAlertForm);
    newFormState.targetPrice = parseInt(e.target.value); // may have to change this to parseFloat
    this.setState({
      priceAlertForm: newFormState,
    }, () => { console.log(this.state.priceAlertForm) });
  }


  // function to delete price alert


  // function to modify price alerts


  render() {
    // if no session_id ask user to sign in
    if (!this.state.session_id) {
      document.getElementById('googleloginbutton').children[0].click();
      return <div>Please log in</div>
    }

    const { departingAirport, destinations, dates, title, targetPrice } = this.state.priceAlertForm;

    const formattedDestinations = destinations.join(', ');

    // FIX LATER
    const formattedDates = dates.join(',');

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
        <div>Departing: {departingAirport}</div>
        <div>Destination(s): {formattedDestinations}</div>
        <div>Date(s): {formattedDates}</div>
        <div>
          Target Price: $
          <input 
            type="number"
            // min="0"
            // max="99999"
            onChange={this.onPriceChange} 
            value={targetPrice} 
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
  searchParams: PropTypes.object,
  pricealert: PropTypes.object,
  session_id: PropTypes.string,
  user: PropTypes.object,
  createPriceAlert: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // searchParams: makeSelectSearchParams(),
  // pricealert: makeSelectPriceAlert(),
  session_id: makeSelectSessionId(),
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    createPriceAlert: params => dispatch({
      type: CREATE_PRICE_ALERT,
      params,
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
