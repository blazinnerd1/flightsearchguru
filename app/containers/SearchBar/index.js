/*
 * SearchBar
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Label from './Label';
import messages from './messages';
import {
  changeMetaflightchoice,
  changeMetadest,
  changeMetadeparting,
  changeMetalength,
  changeMetaending,
} from './actions';
import {
  makeSelectMetaflightchoice,
  makeSelectMetadest,
  makeSelectMetadeparting,
  makeSelectMetalength,
  makeSelectMetaending,
} from './selectors';
import {
  typeOptions,
  destOptions,
  timeOptions,
  lengthOptions,
} from './menuOptions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar extends React.PureComponent {
  render() {
    const {
      metaflightchoice,
      metadest,
      metadeparting,
      metalength,
      metaending,
    } = this.props;
    return (
      <div>
        <CenteredSection>
          <Label>
            <FormattedMessage {...messages.metaflightchoice} />
            <Select
              id="metaflightchoice"
              value={{ label: metaflightchoice, value: metaflightchoice }}
              options={typeOptions}
              onChange={this.props.onChangeMetaflightchoice}
            />
          </Label>
          <Label>
            <FormattedMessage {...messages.metadest} />
            <Select
              id="metadest"
              options={destOptions}
              value={{ label: metadest, value: metadest }}
              onChange={this.props.onChangeMetadest}
            />
          </Label>
          <Label>
            <FormattedMessage {...messages.metadeparting} />
            <Select
              id="metadeparting"
              value={{ label: metadeparting, value: metadeparting }}
              options={timeOptions}
              onChange={this.props.onChangeMetadeparting}
            />
          </Label>
          <div
            style={{
              width: '15em',
              display: 'inline-block',
              marginRight: '0.5em',
              paddingTop: '1.5em',
            }}
          >
            <div style={{ position: 'relative', bottom: '-1.5em' }}>
              <FormattedMessage {...messages.metalength} />
            </div>
            <Label>
              <Select
                id="metalength"
                options={lengthOptions}
                value={{ label: metalength, value: metalength }}
                onChange={this.props.onChangeMetalength}
              />
            </Label>
            <Label>
              <Select
                id="metaending"
                options={timeOptions}
                value={{ label: metaending, value: metaending }}
                onChange={this.props.onChangeMetaending}
              />
            </Label>
          </div>
          <Form onSubmit={this.props.onSubmitForm} />
        </CenteredSection>
        BAR FOR DEPARTURE -> BAR FOR DESTINATIONS [BAR FOR TIME] (optional) [Bar
        for SECOND TIME]
        <CenteredSection />
      </div>
    );
  }
}

SearchBar.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  metaflightchoice: PropTypes.string,
  metadest: PropTypes.string,
  metadeparting: PropTypes.string,
  metalength: PropTypes.string,
  metaending: PropTypes.string,
  onChangeMetaflightchoice: PropTypes.func,
  onChangeMetadest: PropTypes.func,
  onChangeMetadeparting: PropTypes.func,
  onChangeMetalength: PropTypes.func,
  onChangeMetaending: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMetaflightchoice: obj => dispatch(changeMetaflightchoice(obj)),
    onChangeMetadest: obj => dispatch(changeMetadest(obj)),
    onChangeMetadeparting: obj => dispatch(changeMetadeparting(obj)),
    onChangeMetalength: obj => dispatch(changeMetalength(obj)),
    onChangeMetaending: obj => dispatch(changeMetaending(obj)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadRepos());
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
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchbar', reducer });

const withSaga = injectSaga({ key: 'searchbar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchBar);
