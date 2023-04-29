import readlineSync from 'readline-sync';

const checkMistakeQuest = (question, correctResult, name) => {
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

const runGameEngine = (questResult, task) => {
  const iteretionsCount = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`, '!');
  console.log(task);
  for (let i = 0; i < iteretionsCount; i += 1) {
    const a = questResult();
    if (checkMistakeQuest(a.question, a.correctResult, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export {runGameEngine};
