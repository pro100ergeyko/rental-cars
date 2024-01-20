export const changeFilter = (cars, filters) => {
  const filterValues = Object.entries(filters);
  return cars.filter(car => {
    return (
      car[filterValues[0][0]].includes(filterValues[0][1]) &&
      parseFloat(car[filterValues[1][0]].replace('$', '')) <=
        filterValues[1][1] &&
      car.mileage >= filterValues[2][1] &&
      car.mileage <= filterValues[3][1]
    );
  });
};
