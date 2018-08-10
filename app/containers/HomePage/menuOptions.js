/**
 * Menu Options
 */

export const typeOptions = ['one-way', 'round-trip'].map(x => ({
  label: x,
  value: x,
}));
export const destOptions = [
  'city(s)',
  'country(s)',
  'region(s)',
  'anywhere',
].map(x => ({ label: x, value: x }));
export const timeOptions = ['day(s)', 'week(s)', 'month(s)'].map(x => ({
  label: x,
  value: x,
}));
export const lengthOptions = ['lasts at least', 'return on some'].map(x => ({
  label: x,
  value: x,
}));
