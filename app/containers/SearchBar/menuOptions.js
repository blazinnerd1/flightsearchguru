/**
 * Menu Options
 */
import { destinations, departureDestinations } from './buildDestinations';

export const typeOptions = ['one-way', 'round-trip'].map(x => ({
  label: x,
  value: x,
}));
export const timeOptions = ['days', 'weeks', 'months'].map(x => ({
  label: x,
  value: x,
}));

export const destinations;
export const departureDestinations;