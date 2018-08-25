// removes destinations which are sub-destinations of regions or countries
const removeDuplicateDests = destinations => {
  const anywhere = destinations.find(d => d.isAnywhere);
  if (anywhere) {
    return [anywhere];
  }

  const regions = destinations.filter(x => x.isRegion);
  const countries = destinations.filter(x => x.isCountry);
  const cities = destinations.filter(x => x.isCity);

  const regionNamesSelected = regions.map(region => region.optionString);
  const countryNamesSelected = countries.map(
    country => country.label.split('|')[1],
  );

  // all regions are valid as long as "anywhere" is not selected
  let solution = regions;

  // add countries not already included in a region
  solution = solution.concat(
    countries.filter(x => !regionNamesSelected.includes(x.region)),
  );

  // add cities not already included in a country or region
  solution = solution.concat(
    cities.filter(
      city =>
        !regionNamesSelected.includes(city.region) &&
        !countryNamesSelected.includes(city.country),
    ),
  );

  return solution;
};

const removeInvalidDestination = (destinations, destinationLocations) => {
  let solution = destinationLocations;
  if (destinations.length === 0) {
    return solution;
  }

  const anywhere = destinations.find(d => d.isAnywhere);
  if (anywhere) {
    return [anywhere];
  }

  const regions = destinations.filter(x => x.isRegion);
  const countries = destinations.filter(x => x.isCountry);

  const regionNamesSelected = regions.map(region => region.optionString);
  const countryNamesSelected = countries.map(
    country => country.label.split('|')[1],
  );

  solution = solution.filter(
    destination =>
      destination.isAnywhere || destination.isRegion ||
      (destination.isCountry &&
        !regionNamesSelected.includes(destination.region)) ||
      (destination.isCity &&
        !regionNamesSelected.includes(destination.region) &&
        !countryNamesSelected.includes(destination.country)),
  );

  return solution;
};

export { removeDuplicateDests, removeInvalidDestination };