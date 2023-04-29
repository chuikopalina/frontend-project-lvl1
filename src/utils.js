const getRandomInteger = (n) => {
  return Math.floor(Math.random() * n);
}
const getRndIntegerSegment = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomInteger, getRndIntegerSegment};
