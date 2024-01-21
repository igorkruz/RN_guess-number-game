export const generateRandomNumber = (min: number, max: number, exclude: number): any => {
  const rndNumber = Math.floor(Math.random() * (max - min) + min);

  if (rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
}