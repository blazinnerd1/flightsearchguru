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
import Input from './styled-components/Input';

import {
  updateSearchDepartingAirport,
  updateSearchDestination,
  // updateSearchDestinationType,
  updateSearchStartDate,
  updateSearchEndDate,
} from './actions';

import {
  makeSelectDepartingAirport,
  makeSelectDestination,
  // makeSelectDestinationType,
  makeSelectStartDate,
  makeSelectEndDate,
} from './selectors';

import {
  makeSelectMetaflightchoice,
  makeSelectMetadest,
  makeSelectMetadeparting,
  makeSelectMetalength,
  makeSelectMetaending,
} from '../SearchBar/selectors';

import {
  makeSelectGeodata,
} from '../Homepage/selectors';

import {
  UPDATE_SEARCH_DEPARTING_AIRPORT,
  UPDATE_SEARCH_DESTINATION,
  // UPDATE_SEARCH_DESTINATION_TYPE,
  UPDATE_SEARCH_START_DATE,
  UPDATE_SEARCH_END_DATE,
} from './constants';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      departingAirport: '',
      destination: '',
      // destinationType: '',
      startDate: '',
      endDate: '',
    };

    this.updateSearchDepartingAirport = this.updateSearchDepartingAirport.bind(this);
    this.updateSearchDestination = this.updateSearchDestination.bind(this);
    this.updateSearchStartDate = this.updateSearchStartDate.bind(this);
    this.updateSearchEndDate = this.updateSearchEndDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchDepartingAirport(evt) {
    if (evt.preventDefault) { // evt is a key stroke
      evt.preventDefault();
      this.setState({
        departingAirport: evt.target.value,
      });
    } else { // evt is a selection from dropdown
      this.setState({
        departingAirport: evt,
      });
    }

  }

  updateSearchDestination(evt) {
    // evt.preventDefault();
    // this.setState({
    //   destination: evt.target.value,
    // });


    if (evt.preventDefault) { // evt is a key stroke
      evt.preventDefault();
      this.setState({
        destination: evt.target.value,
      });
    } else { // evt is a selection from dropdown
      this.setState({
        destination: evt.id,
      });
    }
  }

  updateSearchStartDate(evt) {
    evt.preventDefault();
    this.setState({
      startDate: evt.target.value,
    });
  }

  updateSearchEndDate(evt) {
    // console.log('...............................................')
    // console.log(evt)
    evt.preventDefault();
    this.setState({
      endDate: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    console.log('handleSubmit fired =================================');
    this.props.onSubmitForm(this.state);
  }

  render() {
    const {
      metaflightchoice,
      metadest,
      metadeparting,
      metalength,
      metaending,

      // different from local state
      departingAirport,
      destination,
      startDate,
      endDate,
      geodata
    } = this.props;


    const geodataAll = geodata._root.entries;
    const regions = geodataAll[0][1];
    const countries = geodataAll[2][1];
    const cities = geodataAll[1][1];
    if (!cities.length) {
      console.log('Geodata is loaded');
    }

    let validDepartures = [];
    let validDestinations = [];

    return (
      <div>
        <CenteredSection>
          <Form onSubmit={this.handleSubmit}>
            <Label>
              <FormattedMessage {...messages.searchDeparture} />
              {/* <Input
                id="departingAirport"
                name="departingAirport"
                type="text"
                placeholder="Departing"
                value={this.state.departingAirport}
                onChange={evt => this.updateSearchDepartingAirport(evt)}
              /> */}
              <Select
                // isSearchable="True"
                onChange={evt => this.updateSearchDepartingAirport(evt)}
                options={cities}
                placeholder="Departing"
              />

            </Label>
            <Label>
              <FormattedMessage {...messages.searchDestination} />
              {/* <Input
                id="destination"
                name="destination"
                type="text"
                placeholder="Destination"
                value={this.state.destination}
                onChange={evt => this.updateSearchDestination(evt)}
              /> */}
              <Select
                // isSearchable="True"
                onChange={evt => this.updateSearchDestination(evt)}
                options={cities}
                placeholder="Destination"
              />
            </Label>

            <Label>
              <FormattedMessage {...messages.searchStartDate} />
              <Input
                id="startDate"
                name="startDate"
                type="date"
                placeholder="Start Date"
                value={this.state.startDate}
                onChange={evt => this.updateSearchStartDate(evt)}
                style={{
                  width: "150px"
                }}
              />
            </Label>
            <Label>
              <FormattedMessage {...messages.searchEndDate} />
              <Input
                id="endDate"
                name="endDate"
                type="date"
                placeholder="End Date"
                value={this.state.endDate}
                onChange={evt => this.updateSearchEndDate(evt)}
                style={{
                  width: "150px"
                }}
              />
            </Label>
            <Button type="submit">Consult Guru </Button>
          </Form>
        </CenteredSection>
      </div>
    );
  }
}

SearchBar2.propTypes = {
  metaflightchoice: PropTypes.string,
  metadest: PropTypes.string,
  metadeparting: PropTypes.string,
  metalength: PropTypes.string,
  metaending: PropTypes.string,
  departingAirport: PropTypes.string,
  destination: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  onChangeDepartingAirport: PropTypes.func,
  onChangeDestination: PropTypes.func,
  onChangeDestnationType: PropTypes.func,
  onChangeStartDate: PropTypes.func,
  onChangeEndDate: PropTypes.func,
  onSubmitForm: PropTypes.func,
  geodata: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeDepartingAirport: obj => dispatch(updateSearchDepartingAirport(obj)),
    onChangeDestination: obj => dispatch(updateSearchDestination(obj)),
    // onChangeDestnationType: obj => dispatch(updateSearchDestinationType(obj)),
    onChangeStartDate: obj => dispatch(updateSearchStartDate(obj)),
    onChangeEndDate: obj => dispatch(updateSearchEndDate(obj)),

    onSubmitForm: state => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadRepos());
      // evt.preventDefault();
      console.log('searchBar2 local state', state);

      const departingAirport = {
        type: UPDATE_SEARCH_DEPARTING_AIRPORT,
        value: state.departingAirport,
      };
      console.log('departingAirport', departingAirport);
      dispatch(updateSearchDepartingAirport(departingAirport));

      const destination = {
        type: UPDATE_SEARCH_DESTINATION,
        value: state.destination,
      };
      console.log('destination', destination);
      dispatch(updateSearchDestination(destination));

      const startDate = {
        type: UPDATE_SEARCH_START_DATE,
        value: state.startDate,
      };
      console.log('startDate', startDate);
      dispatch(updateSearchDestination(startDate));

      const endDate = {
        type: UPDATE_SEARCH_END_DATE,
        value: state.endDate,
      };
      console.log('endDate', endDate);
      dispatch(updateSearchDestination(endDate));

      console.log('submitting thing lolol');
    },
  };
}

const mapStateToProps = createStructuredSelector({
  metaflightchoice: makeSelectMetaflightchoice(),
  metadest: makeSelectMetadest(),
  metadeparting: makeSelectMetadeparting(),
  metalength: makeSelectMetalength(),
  metaending: makeSelectMetaending(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),

  departingAirport: makeSelectDepartingAirport(),
  destination: makeSelectDestination(),
  // destinationType: makeSelectDestinationType(),
  startDate: makeSelectStartDate(),
  endDate: makeSelectEndDate(),

  geodata: makeSelectGeodata(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchBar2', reducer });
const withSaga = injectSaga({ key: 'searchBar2', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchBar2);
