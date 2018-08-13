/**
 *
 * SearchBar2
 *
 */

import React from 'react';
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
  updateSearchDestinationType,
  updateSearchStartDate,
  updateSearchEndDate,
} from './actions';

import {
  makeSelectDepartingAirport,
  makeSelectDestination,
  makeSelectDestinationType,
  makeSelectStartDate,
  makeSelectEndDate,
} from './selectors';

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
      destinationType: '',
      startDate: '',
      endDate: '',
    };

    this.updateSearchDepartingAirport = this.updateSearchDepartingAirport.bind(
      this,
    );
    this.updateSearchDestination = this.updateSearchDestination.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearchDepartingAirport(evt) {
    evt.preventDefault();
    this.setState({
      departingAirport: evt.target.value,
    });
  }

  updateSearchDestination(evt) {
    evt.preventDefault();
    this.setState({
      destination: evt.target.value,
    });
  }

  updateSearchStartDate(evt) {
    evt.preventDefault();
    this.setState({
      startDate: evt.target.value,
    });
  }

  updateSearchEndDate(evt) {
    evt.preventDefault();
    this.setState({
      endDate: evt.target.value,
    });
  }

  // departingAirport: '',
  // destination: '',
  // destinationType: '',
  // startDate: '',
  // endDate: ''

  handleSubmit(evt) {
    evt.preventDefault();

    console.log(
      'handle submit fired ==================================================',
    );
    // console.log(evt);
    this.props.onSubmitForm(this.state);
  }

  render() {
    // const {
    //   metaflightchoice,
    //   metadest,
    //   metadeparting,
    //   metalength,
    //   metaending,
    // } = this.props;
    return (
      <div>
        <CenteredSection>
          <Form onSubmit={this.handleSubmit}>
            <Label>
              <FormattedMessage {...messages.searchDeparture} />
              <Input
                id="departingAirport"
                name="departingAirport"
                type="text"
                placeholder="Departing"
                value={this.state.departingAirport}
                onChange={evt => this.updateSearchDepartingAirport(evt)}
              />
            </Label>
            <Label>
              <FormattedMessage {...messages.searchDestination} />
              <Input
                id="destination"
                name="destination"
                type="text"
                placeholder="Destination"
                value={this.state.destination}
                onChange={evt => this.updateSearchDestination(evt)}
              />
            </Label>

            <Label>
              <FormattedMessage {...messages.searchStartDate} />
              <Input
                id="startDate"
                name="startDate"
                type="text"
                placeholder="Start Date"
                value={this.state.startDate}
                onChange={evt => this.updateSearchStartDate(evt)}
              />
            </Label>
            <Label>
              <FormattedMessage {...messages.searchEndDate} />
              <Input
                id="endDate"
                name="endDate"
                type="text"
                placeholder="End Date"
                value={this.state.endDate}
                onChange={evt => this.updateSearchEndDate(evt)}
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
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
  // metaflightchoice: PropTypes.string,
  // metadest: PropTypes.string,
  // metadeparting: PropTypes.string,
  // metalength: PropTypes.string,
  // metaending: PropTypes.string,
  // onChangeMetaflightchoice: PropTypes.func,
  // onChangeMetadest: PropTypes.func,
  // onChangeMetadeparting: PropTypes.func,
  // onChangeMetalength: PropTypes.func,
  // onChangeMetaending: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeDepartingAirport: obj => dispatch(updateSearchDepartingAirport(obj)),
    onChangeDestination: obj => dispatch(updateSearchDestination(obj)),
    onChangeDestnationType: obj => dispatch(updateSearchDestinationType(obj)),
    onChangeStartDate: obj => dispatch(updateSearchStartDate(obj)),
    onChangeEndDate: obj => dispatch(updateSearchEndDate(obj)),

    onSubmitForm: state => {
      // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadRepos());
      // evt.preventDefault();
      console.log('searchBar2 local state', state);

      const departAirport = {
        type: UPDATE_SEARCH_DEPARTING_AIRPORT,
        // departingAirport: evt.target.value,
        value: state.departingAirport,
      };
      console.log('departingAirport', departingAirport);
      dispatch(updateSearchDepartingAirport(departingAirport));

      const destination = {
        type: UPDATE_SEARCH_DESTINATION,
        // departingAirport: evt.target.value,
        value: state.destination,
      };
      console.log('destination', destination);
      dispatch(updateSearchDestination(destination));

      const startDate = {
        type: UPDATE_SEARCH_START_DATE,
        // departingAirport: evt.target.value,
        value: state.startDate,
      };
      console.log('startDate', startDate);
      dispatch(updateSearchDestination(startDate));

      const endDate = {
        type: UPDATE_SEARCH_END_DATE,
        // departingAirport: evt.target.value,
        value: state.endDate,
      };
      console.log('endDate', endDate);
      dispatch(updateSearchDestination(endDate));

      console.log('submitting thing lolol');
    },
  };
}

const mapStateToProps = createStructuredSelector({
  // metaflightchoice: makeSelectMetaflightchoice(),
  // metadest: makeSelectMetadest(),
  // metadeparting: makeSelectMetadeparting(),
  // metalength: makeSelectMetalength(),
  // metaending: makeSelectMetaending(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),

  departingAirport: makeSelectDepartingAirport(),
  destination: makeSelectDestination(),
  destinationType: makeSelectDestinationType(),
  startDate: makeSelectStartDate(),
  endDate: makeSelectEndDate(),
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
