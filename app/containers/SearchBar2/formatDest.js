const sortAlpha = (array) => {
  return array.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
  });
};

const formatDestinations = (geodataAll, metadest) => {
  const regions = geodataAll[0][1];
  const countries = geodataAll[2][1];
  const cities = geodataAll[1][1];

  if (metadest === 'region(s)') return sortAlpha(regions);
  if (metadest === 'country(s)') return sortAlpha(countries);
  if (metadest === 'anywhere') return 'anywhere';

  return cities;
};

export { formatDestinations }