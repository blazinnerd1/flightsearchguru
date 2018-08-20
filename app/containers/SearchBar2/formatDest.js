const sortAlphabetically = array =>
  array.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
  });

const formatDestinations = (geoData, destinationType) => {
  const { regions, countries, cities } = geoData.toObject();

  if (destinationType === 'region(s)') return sortAlphabetically(regions);
  if (destinationType === 'country(s)') return sortAlphabetically(countries);
  if (destinationType === 'anywhere') return [{ label: "To anywhere" }];

  return sortAlphabetically(cities);
};

export { formatDestinations };
