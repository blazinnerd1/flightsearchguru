/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Select from 'react-select';
import Label from './Label';
import DoubleWideLabel from './DoubleWideLabel';
import messages from './messages';
import { loadRepos } from '../App/actions';
import SearchBar from '../SearchBar/Loadable';
import { changeUsername, changeMetalength } from './actions';
import { makeSelectUsername } from './selectors';
import {
  typeOptions,
  destOptions,
  timeOptions,
  lengthOptions,
} from './menuOptions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const {
      metaflightchoice,
      metadest,
      metadeparting,
      metalength,
      metaending,
    } = this.props;

    return <article>
        <Helmet>
          <title>Flight Search Guru</title>
          <meta name="description" content="World's #1 Flight Exploration Engine" />
        </Helmet>
        <div>
          <CenteredSection>
            <Label>
              <FormattedMessage {...messages.metaflightchoice} />
              <Select id="metaflightchoice" value={metaflightchoice} options={typeOptions} onChange={this.props.onChangemetaflightchoice} />
            </Label>

            <Label>
              <FormattedMessage {...messages.metadest} />
              <Select id="metadest" options={destOptions} value={metadest} onChange={this.props.onChangemetadest} />
            </Label>

            <Label>
              <FormattedMessage {...messages.metadeparting} />
              <Select id="metadeparting" value={metadeparting} options={timeOptions} onChange={this.props.onChangemetadeparting} />
            </Label>

            <div style={{ width: '16em', display: 'inline-block', 'padding-top': '1.5em' }}>
              <div style={{ position: 'relative', bottom: '-1.5em' }}>
                <FormattedMessage {...messages.metalength} />
              </div>
              <Label>
                <Select id="metalength" value={metalength} options={lengthOptions} onChange={this.props.onChangemetalength} />
              </Label>
              <Label>
                <Select id="metaending" value={metaending} options={timeOptions} onChange={this.props.onChangemetaending} />
              </Label>
            </div>
            <Form onSubmit={this.props.onSubmitForm} />
          </CenteredSection>
          <SearchBar />
        </div>
      </article>;
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
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
      //dispatch(loadRepos());
      console.log('submitting thing lolol');
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
