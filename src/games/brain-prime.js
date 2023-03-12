#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { nameQuestion } from './cli.js';
// eslint-disable-next-line import/extensions
import { myQuest } from './index.js';

const name = nameQuestion();
console.log(`Hello, ${name}`, '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const randomInteger = () => Math.floor(Math.random() * 100);
const primeNumber = () => {
  let mistakeDetected = false;
  let question = ' ';
  let correctResult = ' ';
  // eslint-disable-next-line camelcase
  let is_prime = true;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const number = randomInteger();
    question = number;
    const sqrt = Math.sqrt(number);
    // eslint-disable-next-line no-bitwise
    if (number === 2 | number === 3) {
      correctResult = 'yes';
    } else if (number % 2 === 0 || number % 3 === 0) {
      correctResult = 'no';
    } else {
      // eslint-disable-next-line no-shadow
      for (let i = 5; i <= sqrt; i += 6) {
        if (number % i === 0) {
          // eslint-disable-next-line camelcase
          is_prime = false;
          break;
        }
      }
      // eslint-disable-next-line camelcase
      if (is_prime) {
        // eslint-disable-next-line no-shadow
        for (let i = 7; i <= sqrt; i += 6) {
          if (number % i === 0) {
            // eslint-disable-next-line camelcase
            is_prime = false;
            break;
          }
        }
      }
      // eslint-disable-next-line camelcase
      if (is_prime) {
        correctResult = 'yes';
      } else {
        correctResult = 'no';
      }
    }
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
primeNumber();
