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
import styled from 'styled-components';

import { CREATE_PRICE_ALERT } from './constants';
import { makeSelectSearchParams } from '../SearchResults/selectors';

import { parseDestinations } from '../SearchBar/buildSearchQuery';
import StyledButton from '../SearchBar/styled-components/Button';

/* eslint-disable react/prefer-stateless-function */
export class PriceAlert extends React.Component {
  constructor(props) {
    super(props);
    const { /*pricealerts,*/ user } = props;

    const queryObj = JSON.parse(decodeURI(window.location.href.split('=')[1]));
    const { flightType, departureTimeType, departureTimes, departingAirport, destinations } = queryObj;
    const destinationsDisplay = destinations.map(dest => dest.optionString);
    const parsedDestinations = parseDestinations(destinations);

    this.state = {
      searchParams: this.searchParams,
      user,
      // user: this.user,
      priceAlertForm: {
        user_id: user.id,
        title: '',
        flight_type: 'airports',
        departing: departingAirport.airport, 
        destinationsDisplay,
        destinations: parsedDestinations, 
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
    if (!this.state.user) {
      document.getElementById('googleloginbutton').children[0].click();
      return (
          <div style={{
            backgroundColor:'white',
            height:'400px',
            paddingTop:'150px',
            textAlign:'center',
          }}>
            Please log in to create Price Alert
          </div>
      ) 
    }

    const { departing, destinationsDisplay, dates, title, target_price } = this.state.priceAlertForm;

    const formattedDestinations = destinationsDisplay.join(', ');

    // FIX LATER
    const formattedDates = dates.join(', ');

    const Label = styled.div`
      width: 150px;
      display: inline-block;
      padding: 5px 0 5px 10px;
      vertical-align: top;
    `;

    const Field = styled.div`
      width: 400px;
      display: inline-block;
      padding: 5px;
    `;


    const priceAlertForm = (
      <div style={{
        backgroundColor:'white',
      }}>
        <form 
          onSubmit={this.submitPriceAlert}
          style={{
            padding: "100px"
          }}
        >
          <div style={{ padding:'0 0 10px 0' }}>
            <strong>Create New Price Alert</strong>
          </div>
          <div>
            <Label>Price Alert Name:</Label>
            <input
                type='text'
                onChange={this.onTitleChange} 
                value={title} 
                style={{ borderBottom: 'solid black 1px', width: '200px', display: 'inline-block', padding: '5px' }}
                required
            />
          </div>
          <div>
            <Label>Departing:</Label>
            <Field>{departing}</Field>
          </div>
          <div>
            <Label>Destination(s):</Label>
            <Field>{formattedDestinations}</Field>
          </div>
          <div>
            <Label>Date(s):</Label>
            <Field>{formattedDates}</Field>
          </div>
          <div>
            <Label>Target Price:</Label>
            $<input 
              type="number"
              onChange={this.onPriceChange} 
              value={target_price} 
              style={{ borderBottom: 'solid black 1px', width: '100px', display: 'inline-block', padding: '5px'  }}
              required
            />
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ margin: 'auto', paddingTop: '20px' }}>
              <StyledButton>Create Price Alert</StyledButton>
            </div>
          </div>
        </form>
      </div>
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
  // pricealerts: PropTypes.object,
  user: PropTypes.object,
  createPriceAlert: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // pricealert: makeSelectPriceAlert(),
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
