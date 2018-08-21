/**
 *
 * SearchBar2
 *
 */

import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import makeSelectSearchBar2 from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import CenteredSection from './styled-components/CenteredSection';
import Form from './styled-components/Form';
import Label from './styled-components/Label';
import Button from './styled-components/Button';

import { updateSearchParams, searchFlights } from './actions';
import { makeSelectSearchParams } from './selectors';
import { makeSelectMetaOptions } from 'containers/SearchBar/selectors';
import { UPDATE_SEARCH_PARAMS, SEARCH_FLIGHTS } from './constants';

import Departures from 'components/Departures';
import Destination from 'components/Destination';
import DepartDates from 'components/DepartDates';

// import request from 'utils/request';
import { formatDestinations } from './formatDest';
import { formatDepartures } from './formatDepartures';
import { supportedDepartingAirports } from '../../../data/data';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar2 extends React.PureComponent {
  constructor(props) {
    super(props);
    try {
      const { metaOptions, searchParams } = props;
      const departingAirport = searchParams.get('departingAirport');
      const destinations = searchParams.get('destinations').toArray();
      const dates = searchParams.get('dates').toArray();

      const destinationType = metaOptions.get('dest');
      const departingType = metaOptions.get('departing');

      const destinationOptions = formatDestinations(
        props.geoData,
        destinationType,
      );

      this.state = {
        departingAirport,
        destinations,
        dates,
        destinationType,
        destinationOptions,
        departingType,
      };
    } catch(err) {
      console.log(err);
    }
    

    this.updateSearchDepartingAirport = this.updateSearchDepartingAirport.bind(
      this,
    );
    this.updateSearchDestinations = this.updateSearchDestinations.bind(this);
    this.updateSearchDates = this.updateSearchDates.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchDepartingAirport(evt) {
    // evt is a selection from dropdown
    this.setState({
      departingAirport: evt.id,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    let oldMetaOptions = prevProps.metaOptions;
    const oldDestinationType = oldMetaOptions.get('dest');
    const oldDepartingType = oldMetaOptions.get('departing');

    const newMetaOptions = this.props.metaOptions;
    const newDestinationType = newMetaOptions.get('dest');
    const newDepartingType = newMetaOptions.get('departing');

    if (oldDestinationType !== newDestinationType) {
      console.log('old', oldMetaOptions, 'new', newMetaOptions)
      const destinationOptions = formatDestinations(this.props.geoData, newDestinationType);
      this.setState({
        destinationType: newDestinationType,
        destinations: [],
        destinationOptions,
      });
    }
    if (oldDepartingType !== newDepartingType){
      this.setState({ departingType: newDepartingType, dates: [] });
    }
  }

  updateSearchDestinations(destinationArray) {
    console.log('---------------------------------', destinationArray)
    this.setState({
      destinations: destinationArray,
    });
    
  }

  updateSearchDates(evt) {
    if (evt.valueText) {
      const selectedDateArray = evt.valueText.split(', ');
      this.setState(
        {
          dates: selectedDateArray,
        },
        () => console.log('selected dates: ', this.state.dates),
      );
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const searchParams = {
      type: UPDATE_SEARCH_PARAMS,
      value: this.state,
    };
    
    this.props.onUpdateSearchParams(searchParams);

    const searchParameters = {
      type: SEARCH_FLIGHTS,
      value: this.state,
    };
    this.props.onSearchFlights(searchParameters);
  }

  render() {
    console.log('SearchBar2 state on render', this.state);
    const { destinations, destinationOptions, destinationType, departingType } = this.state;
    const destPlaceholder = `Select ${destinationType}`;
    const departingAirports = formatDepartures(supportedDepartingAirports);

    return <div>
        <CenteredSection>
          <Form onSubmit={this.handleSubmit}>
            <Departures update={evt => this.updateSearchDepartingAirport(evt)} departures={departingAirports} />
            <Destination update={evt => this.updateSearchDestinations(evt)} destinations={destinationOptions} value={destinations} placeholder={destPlaceholder} destinationType={destinationType} />
            <DepartDates
              departingType={departingType} 
              updateDates={(evt, inst) => {
                this.updateSearchDates(evt, inst);
              }} 
              selectedDates={this.state.dates}
            />
            <Button type="submit">Consult Guru</Button>
          </Form>
        </CenteredSection>
      </div>;
  }
}

SearchBar2.propTypes = {
  metaOptions: PropTypes.object,
  searchParams: PropTypes.object,
  onUpdateSearchParams: PropTypes.func,
  onSearchFlights: PropTypes.func,
  geoData: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateSearchParams: obj => dispatch(updateSearchParams(obj)),
    onSearchFlights: obj => dispatch(searchFlights(obj)),
  };
}

const mapStateToProps = createStructuredSelector({
  metaOptions: makeSelectMetaOptions(),
  searchParams: makeSelectSearchParams(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchBar2', reducer });
const withSaga = injectSaga({ key: 'searchBar2', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga,
)(SearchBar2);

