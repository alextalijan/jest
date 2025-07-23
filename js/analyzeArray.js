const analyzeArray = function thatReturnsObjectWithInformationAboutArray(
  array
) {
  // If the array is empty, return the object with null properties
  if (array.length === 0) {
    return { average: null, min: null, max: null, length: 0 };
  }

  const length = array.length;
  let sum = array[0];
  let min = array[0];
  let max = array[0];

  // Loop through all numbers to calculate sum, min and max
  for (let i = 1; i < length; i += 1) {
    sum += array[i];
    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }
  }

  const average = sum / length;

  return { average, min, max, length };
};

export default analyzeArray;
