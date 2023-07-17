const analyzeArray = (array) => {

  const sum = array.reduce((sum, current) => sum + current, 0);
  const average = sum / array.length;

  const min = Math.min(...array);

  const max = Math.max(...array);

  const length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length
  }
}

export default analyzeArray;