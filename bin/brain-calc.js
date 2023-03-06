#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { nameQuestion } from '../src/cli.js';
// eslint-disable-next-line import/extensions
import { myQuest } from '../src/index.js';

const name = nameQuestion();
// eslint-disable-next-line no-console
console.log(`Hello, ${name}`, '!');
const randomInteger = () => Math.floor(Math.random() * 10);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// eslint-disable-next-line no-console
console.log('What is the result of the expression?');
const evenOrOdd = () => {
  let mistakeDetected = false;
  const operators = ['-', '*', '+'];
  let correctResult = 0;
  let question = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const numbers = [randomInteger(), randomInteger()];
    const operator = operators[getRndInteger(0, 2)];
    if (operator === '-') {
      correctResult = numbers[0] - numbers[1];
      question = `${numbers[0]} - ${numbers[1]}`;
    } else if (operator === '+') {
      correctResult = numbers[0] + numbers[1];
      question = `${numbers[0]} + ${numbers[1]}`;
    } else {
      correctResult = numbers[0] * numbers[1];
      question = `${numbers[0]} * ${numbers[1]}`;
    }
    mistakeDetected = myQuest(question, String(correctResult), name);
    if (mistakeDetected === true) {
      break;
    }
  }
  if (mistakeDetected === false) {
    // eslint-disable-next-line no-console
    console.log(`Congratulations, ${name}!`);
  }
};
evenOrOdd();
