const sortAlphabetically = array =>
  array.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
  });

// const splitCities = (cities) => {
//   const processedCities = [];
//   cities.map(city => {
//     const codes = city.label.split('|');
//     codes.forEach(code => {
//       const splitCity = {
//         id: city.id,
//         label: code,
//       }
//       processedCities.push(splitCity);
//     })
//   })
//   return processedCities;
// };

const formatCities = cities => {
  const processed = [];
  cities.map(city => {
    const code = city.label
      .split('|')
      .slice(0, 2)
      .join(' - ');
    const processedCity = {
      value: city.id,
      label: code,
    };
    processed.push(processedCity);
  });
  return sortAlphabetically(processed);
};

const formatDestinations = (geoData, metadest) => {
  const { regions, countries, cities } = geoData.toObject();

  if (metadest === 'region(s)') return sortAlphabetically(regions);
  if (metadest === 'country(s)') return sortAlphabetically(countries);
  if (metadest === 'anywhere') return ['anywhere'];

  // return splitCities(cities);
  return formatCities(cities);
};

export { formatDestinations };
