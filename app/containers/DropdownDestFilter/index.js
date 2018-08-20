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

// if a flight is excluded, it should not be checked
const checkbox = (option,index,onchange,excluding)=>{
  if (!excluding.includes(option)){
    return <label><input onChange={onchange}type="checkbox"
    checked />{option}</label>
  } 

  return <label><input onChange={onchange} type="checkbox"
    />{option}</label>





}

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
    console.log('rendering dropdown')
    console.log(this.props)
    if(this.state.open){
      return <div>
          <div onClick={this.toggle}>Filter By Destination</div>
          {options.map((option, index) => <div key={`dropdown_${index}`}>
              {checkbox(option, index, () => {
                  onChange(option);
                }, excluding)}
            </div>)}
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
