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
// import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import CenteredSection from './styled-components/CenteredSection';
import Label from './styled-components/Label';
import messages from './messages';
import {
  changeMetaType,
  changeMetaDest,
  changeMetaDeparting,
  changeMetaLength,
  changeMetaEnding,
} from './actions';
import { makeSelectMetaOptions } from './selectors';
import {
  typeOptions,
  destOptions,
  timeOptions,
  lengthOptions,
} from './menuOptions';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class SearchBar extends React.PureComponent {
  render() {
    const { metaOptions } = this.props;
    const {
      flightType,
      dest,
      departing,
      length,
      ending,
    } = metaOptions.toObject();

    const roundtripbar =
      flightType === 'one-way' ? (
        ''
      ) : (
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
              value={{ label: length, value: length }}
              onChange={this.props.onChangeLength}
            />
          </Label>
          <Label>
            <Select
              id="metaending"
              options={timeOptions}
              value={{ label: ending, value: ending }}
              onChange={this.props.onChangeEnding}
            />
          </Label>
        </div>
      );

    return (
      <div>
        <CenteredSection>
          <Label>
            <FormattedMessage {...messages.metaflightchoice} />
            <Select
              id="metaflightchoice"
              value={{ label: flightType, value: flightType }}
              isDisabled
              options={typeOptions}
              onChange={this.props.onChangeType}
            />
          </Label>
          <Label>
            <FormattedMessage {...messages.metadest} />
            <Select
              id="metadest"
              options={destOptions}
              value={{ label: dest, value: dest }}
              onChange={this.props.onChangeDest}
            />
          </Label>
          <Label>
            <FormattedMessage {...messages.metadeparting} />
            <Select
              id="metadeparting"
              value={{ label: departing, value: departing }}
              options={timeOptions}
              onChange={this.props.onChangeDeparting}
            />
          </Label>
          {roundtripbar}
        </CenteredSection>
      </div>
    );
  }
}

SearchBar.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  metaOptions: PropTypes.object,
  onChangeType: PropTypes.func,
  onChangeDest: PropTypes.func,
  onChangeDeparting: PropTypes.func,
  onChangeLength: PropTypes.func,
  onChangeEnding: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeType: obj => dispatch(changeMetaType(obj)),
    onChangeDest: obj => dispatch(changeMetaDest(obj)),
    onChangeDeparting: obj => dispatch(changeMetaDeparting(obj)),
    onChangeLength: obj => dispatch(changeMetaLength(obj)),
    onChangeEnding: obj => dispatch(changeMetaEnding(obj)),
  };
}

const mapStateToProps = createStructuredSelector({
  metaOptions: makeSelectMetaOptions(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchbar', reducer });

export default compose(
  withReducer,
  withConnect,
)(SearchBar);
