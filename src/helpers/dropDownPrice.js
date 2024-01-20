export const dropDownPrice = (maxValue = 150) => {
  const result = [];
  for (let i = 0; i <= maxValue; i += 10) {
    result.push(i);
  }
  return result;
};
