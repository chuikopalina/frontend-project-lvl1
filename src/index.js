import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const myQuest = (question, correctResult, name) => {
  let mistakeDetected = false;
  // eslint-disable-next-line no-console
  console.log('Question:', question);
  const userResponse = (readlineSync.question('Your answer:'));
  if (correctResult === userResponse) {
    // eslint-disable-next-line no-console
    console.log('Correct!');
  } else {
    // eslint-disable-next-line no-console
    console.log("'", userResponse, "' is wrong answer ;(. Correct answer was '", correctResult, "'.");
    // eslint-disable-next-line no-console
    console.log(`Let's try again, ${name}!`);
    mistakeDetected = true;
  }
  return mistakeDetected;
};
