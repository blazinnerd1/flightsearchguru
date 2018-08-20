/**
 *
 * PriceFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPriceFilter from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip'

/* eslint-disable react/prefer-stateless-function */
export class PriceFilter extends React.Component {
  constructor() {
    super(props);
    const { min, max } = this.props;
    this.state = {
      min: min,
      max: max
    }

  }
  
  render() {
    const { min, max } = this.props;

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const Handle = Slider.Handle;

    const handle = (props) => {
      // const { value, dragging, index, ...restProps } = props;
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={max}
          // visible={dragging}
          placement="top"
          // key={index}
        >
          <Handle value={max}/>
        </Tooltip>
      );
    };

    return (
      <div>
        {/* <Helmet>
          <title>PriceFilter</title>
          <meta name="description" content="Description of PriceFilter" />
        </Helmet> */}
        {/* <FormattedMessage {...messages.header} /> */}
        <div>
          <div>
            <p>Slider with custom handle</p>
            <Slider min={min} max={max} defaultValue={max}  />
          </div>
        </div>
      </div>

    );
  }
}

PriceFilter.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  // pricefilter: makeSelectPriceFilter(),

});

function mapDispatchToProps(dispatch) {
  return {

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'priceFilter', reducer });
const withSaga = injectSaga({ key: 'priceFilter', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PriceFilter);
