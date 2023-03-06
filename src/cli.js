import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const nameQuestion = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  return name;
};
