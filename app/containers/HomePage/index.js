/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
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
import ReposList from 'components/ReposList';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Label from './Label';
import messages from './messages';
import { loadRepos } from '../App/actions';
import SearchBar from '../SearchBar/Loadable';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const typeOptions = ['one-way', 'round-trip'].map(x => ({
  value: x,
  label: x,
}));
const destOptions = ['city(s)', 'country(s)', 'region(s)', 'anywhere'].map(
  x => ({ value: x, label: x }),
);
const timeOptions = ['day(s)', 'week(s)', 'month(s)'].map(x => ({
  value: x,
  label: x,
}));
const lengthOptions = ['lasts at least', 'return on some'].map(x => ({
  value: x,
  label: x,
}));

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
            <Label>
              <FormattedMessage {...messages.metaflightchoice} />
              <Select
                id="triptype"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
                options={typeOptions}
              />
            </Label>
            <Label>
              <FormattedMessage {...messages.metadest} />
              <Select
                id="destmeta"
                options={destOptions}
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </Label>
            <Label>
              <FormattedMessage {...messages.departingmeta} />
              <Select
                id="departuremeta"
                options={timeOptions}
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </Label>
            <div
              style={{
                width: '17em',
                display: 'inline-block',
                'margin-right': '0.5em',
                'padding-top': '1.5em',
              }}
            >
              <div style={{ position: 'relative', bottom: '-1.5em' }}>
                <FormattedMessage {...messages.lengthmeta} />
              </div>
              <Label>
                <Select
                  id="lengthmeta"
                  options={lengthOptions}
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </Label>
              <Label>
                <Select
                  id="endingmeta"
                  options={timeOptions}
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </Label>
            </div>

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
