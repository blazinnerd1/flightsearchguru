/**
 *
 * Price
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


/* eslint-disable react/prefer-stateless-function */
class Price extends React.Component {
  render() {
    return (
      <div style={{ padding: '2px', margin: 'auto' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
          ${this.props.price}
        </span>
      </div>
    );
  }
}

Price.propTypes = {
  price: PropTypes.number,
};

export default Price;
