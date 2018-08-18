/**
 *
 * DropdownDestFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Select from 'react-select'

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class DropdownDestFilter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open:false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({open:!this.state.open})
  }

  render() {
    const { onChange, options, excluding } = this.props;
    if(this.state.open){
      return <div>
          <div onClick={this.toggle}>Filter By Destination</div>
          <Select isMulti onChange={onChange} options={options} placeholder="Select Month(s)" />
        </div>;
    }else{
  return <div onClick={this.toggle}>Filter By Destination</div>
    }
    
  }
}

DropdownDestFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(DropdownDestFilter);
