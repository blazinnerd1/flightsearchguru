/**
 *
 * FlightFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectFlightResults } from '../SearchBar2/selectors';

import injectReducer from 'utils/injectReducer';
import makeSelectFlightFilter from './selectors';
import reducer from './reducer';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class FlightFilter extends React.Component {
         constructor(props) {
           super(props);
           console.log('flight filter props',props)
           const { filterByPrice, stops, priceLow, priceHigh, sortBy, destinations } = props;

           this.state = { dirty: false, stops, filterByPrice, priceLow, priceHigh, sortBy, destinations }; // if a filter has been changed but not saved the filter is dirty}
         }

         componentWillMount() {
          //  const flights = this.props.searchResults
          //  this.stop_options = [...new Set(flights.map(f=>f.stops.length) ) ];
          //  this.destination_options = [...new Set(flights.map(f => f.to_id))];
          //  this.price_lowest = Math.min(...flights.map(f => f.price) );
          //  this.price_highest = Math.max(...flights.map(f => f.price));
          //  this.onSave();
         }

         onDestChange(destinations) {
           this.setState({ destinations, dirty:true});
         }

        onStopChange(stops) { this.setState({ stops, dirty: true });}

        onPriceChange({ priceLow, priceHigh }) { this.setState({ priceLow, priceHigh, dirty: true });}

         onSave() {
           const { filterByPrice, priceLow, stops, priceHigh, sortBy, destinations } = this.state;
           this.props.updateFilter({
             filterByPrice,
             stops,
             priceLow,
             priceHigh,
             sortBy,
             destinations,
           });

           this.setState({ dirty: false });
         }

         render() {
           let saveButton = this.state.dirty ? <div>
               {' '}
               Save{' '}
             </div> : <div />;
           return <div style={{ width: '50px' }}>
               {saveButton}
               <div>
                 <Select defaultValue={[colourOptions[2], colourOptions[3]]} isMulti name="colors" options={colourOptions} className="basic-multi-select" classNamePrefix="select" />
               </div>
               <div>Filtering By</div>
               <div>All Flights</div>
              <div>Two or Fewer Stops</div>
              <div>Non-Stop Only</div>
               <div>filter by price</div>
               <div>scrolly bar</div>
             </div>;
         }
       }

FlightFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  
};

const mapStateToProps = createStructuredSelector({
  flightfilter: makeSelectFlightFilter(),
  searchResults: makeSelectFlightResults(),
});

export function mapDispatchToProps(dispatch) {
  return { updateFilter: newFilterOptions => dispatch(updateFilter(newFilterOptions)) };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'flightFilter', reducer });

export default compose(
  withReducer,
  withConnect,
)(FlightFilter);
