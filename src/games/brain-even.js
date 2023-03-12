#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { nameQuestion } from './cli.js';
// eslint-disable-next-line import/extensions
import { myQuest } from './index.js';

const name = nameQuestion();
console.log(`Hello, ${name}`, '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomInteger = () => Math.floor(Math.random() * 100000);

const evenOrOdd = () => {
  let mistakeDetected = false;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const number = randomInteger();
    const correctResult = number % 2 === 0 ? 'yes' : 'no';
    mistakeDetected = myQuest(number, correctResult, name);
    if (mistakeDetected === true) {
      break;
    }
  }
  if (mistakeDetected === false) {
    console.log(`Congratulations, ${name}!`);
  }
};
evenOrOdd();
