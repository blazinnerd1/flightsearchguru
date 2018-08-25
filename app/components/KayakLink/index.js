/**
 *
 * KayakLink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ViewLink from './ViewLink';
import { format } from 'date-fns';

function KayakLink({ departing, from_id, to_id }) {
  const utcdate = departing
    .split(' ')
    .slice(0, 5)
    .join(' ');
  const departureDate = format(utcdate, 'YYYY-MM-DD');
  const linkDest = `https://www.kayak.com/flights/${from_id}-${to_id}/${departureDate}?sort=price_a`;
  return (
    <ViewLink href={linkDest} target="_blank">
      <FormattedMessage {...messages.header} />
    </ViewLink>
  );
}

KayakLink.propTypes = { href: PropTypes.string };

export default KayakLink;
