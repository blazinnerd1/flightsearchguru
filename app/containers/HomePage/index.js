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
import ReposList from 'components/ReposList';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Select from './Select';
import Label from './Label';
import messages from './messages';
import { loadRepos } from '../App/actions';
import SearchBar from '../SearchBar/Loadable';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const typeOptions = ['one-way', 'round-trip'];
const destOptions = ['city(s)', 'country(s)', 'region(s)', 'anywhere'];
const timeOptions = ['day(s)', 'week(s)', 'month(s)'];
const lengthOptions = ['lasts at least', 'return on some'];

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>

            <Label>
              <FormattedMessage {...messages.metaflightchoice} />
              <Select
                id="triptype"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </Label>

            <Label>
              <FormattedMessage {...messages.metadest} />
              <Select
                id="destmeta"
                placeholder="cities"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </Label>

            <Label>
              <FormattedMessage {...messages.departingmeta} />
              <Select
                id="departuremeta"
                placeholder="days"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </Label>

            <Label>
              <FormattedMessage {...messages.lengthmeta} />

              <Select
                id="lengthmeta"
                placeholder="lasts at least"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </Label>
            <Label>
              <Select
                id="endingmeta"
                placeholder="days"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </Label>

            <Form onSubmit={this.props.onSubmitForm} />
            <ReposList {...reposListProps} />
          </CenteredSection>
          <SearchBar />
        </div>
      </article>
    );
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
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
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
