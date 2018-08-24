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


// REMOVE FOR PRODUCTION
import { USER_ID, USER_EMAIL, USER_NAME, USER_IMAGE } from "../../../config.js"


/* eslint-disable react/prefer-stateless-function */
export class PriceAlert extends React.Component {
  constructor(props) {
    super(props);
    const { session_id } = props;
    this.state = {
      session_id,
      user_id: '',
      priceAlertForm: {
        title: '',
        targetPrice: null,
      },
      priceAlerts: [],
    };

    this.saveNewPriceAlert = this.saveNewPriceAlert.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);

  }

  componentDidMount() {
    // GET SESSION
      // IF NO SESSION "CLICK" LOGIN
    // GET USER ID
    // HIT UP LAMBDA FOR PRICE ALERTS USING USER ID
      // SET PRICE ALERTS IN STATE


    // // LOAD SESSION_ID
    // const session_id = localStorage.getItem('session_id');
    // console.log(session_id)

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
  saveNewPriceAlert() {
  
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
    newFormState.targetPrice = e.target.value; // may have to change this to parseFloat
    this.setState({
      priceAlertForm: newFormState,
    }, () => { console.log(this.state.priceAlertForm) });
  }



  // function to delete price alert

  // function to modify price alerts


  render() {
    // // if no session_id ask user to sign in
    // if (!this.state.session_id) {
    //   document.getElementById('googleloginbutton').children[0].click();
    //   return <div>Please log in</div>
    // }

    const user = {
      id: USER_ID,
      email: USER_EMAIL,
      name: USER_NAME,
      image: USER_IMAGE,
    }


    const priceAlertForm = (
      <form onSubmit={this.saveNewPriceAlert}>
        <div>
          Title:  
          <input
            type="text"
            onChange={this.onTitleChange} 
            value={this.state.priceAlertForm.title} 
            style={{ borderBottom: "solid black 1px", width: "200px"}}
          />
        </div>
        <div>Departing: {}</div>
        <div>Destination(s): {}</div>
        <div>Date(s): {}</div>
        <div>
          Target Price: $
          <input 
          type="number"
            onChange={this.onPriceChange} 
            value={this.state.priceAlertForm.targetPrice} 
            style={{ borderBottom: "solid black 1px", width: "100px"}}
          />
        </div>
      </form>

    );
    
    return (
      // <div>
      //   <Helmet>
      //     <title>PriceAlert</title>
      //     <meta name="description" content="Description of PriceAlert" />
      //   </Helmet>
      //   <FormattedMessage {...messages.header} />
      // </div>
      <div>
        <div>
          {priceAlertForm}
        </div>
        <div>
          Display price alerts
        </div>
      </div>
    );
  }
}

PriceAlert.propTypes = {
  session_id: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pricealert: makeSelectPriceAlert(),
  session_id: makeSelectSessionId(),
  user: makeSelectUser(),
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

const withReducer = injectReducer({ key: 'priceAlert', reducer });
const withSaga = injectSaga({ key: 'priceAlert', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PriceAlert);
