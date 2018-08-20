const sortAlphabetically = array =>
  array.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
  });

const formatDestinations = (geoData, metadest) => {
  const { regions, countries, cities } = geoData.toObject();

  if (metadest === 'region(s)') return sortAlphabetically(regions);
  if (metadest === 'country(s)') return sortAlphabetically(countries);
  if (metadest === 'anywhere') return ['anywhere'];

  return sortAlphabetically(cities);
};

export { formatDestinations };
