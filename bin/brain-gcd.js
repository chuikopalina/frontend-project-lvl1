#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { nameQuestion } from '../src/cli.js';
// eslint-disable-next-line import/extensions
import { myQuest } from '../src/index.js';

const name = nameQuestion();
console.log(`Hello, ${name}`, '!');
const randomInteger = () => Math.floor((Math.random() * 100) + 1);
console.log('Find the greatest common divisor of given numbers.');
const gcd = () => {
  let mistakeDetected = false;
  let correctResult = 0;
  let question = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const numbers = [randomInteger(), randomInteger()];
    question = `${numbers[0]} ${numbers[1]}`;
    let y = numbers[0];
    let x = numbers[1];
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    correctResult = x;
    mistakeDetected = myQuest(question, String(correctResult), name);
    if (mistakeDetected === true) {
      break;
    }
    if (mistakeDetected === false) {
      // eslint-disable-next-line no-console
      console.log(`Congratulations, ${name}!`);
    }
  }
};
gcd();
