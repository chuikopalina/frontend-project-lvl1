import readlineSync from 'readline-sync';

const nameQuestion = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  return name;
};

const myQuest = (question, correctResult, name) => {
  let mistakeDetected = false;
  console.log('Question:', question);
  const userResponse = (readlineSync.question('Your answer:'));
  if (String(correctResult) === userResponse) {
    console.log('Correct!');
  } else {
    console.log("'", userResponse, "' is wrong answer ;(. Correct answer was '", correctResult, "'.");
    console.log(`Let's try again, ${name}!`);
    mistakeDetected = true;
  }
  return mistakeDetected;
};

const gameLoop = (questResult, name) => {
  const iteretionsCount = 3;
  let mistakeDetected = false;
  for (let i = 0; i < iteretionsCount; i += 1) {
    const a = questResult();
    mistakeDetected = myQuest(a.question, a.correctResult, name);
    if (mistakeDetected === true) {
      break;
    }
  }
  if (mistakeDetected === false) {
    console.log(`Congratulations, ${name}!`);
  }
};

export { gameLoop, myQuest, nameQuestion };
