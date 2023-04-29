#!/usr/bin/env node
import {runGameEngine} from '../index.js';
import {getRandomInteger} from '../utils.js';

const runBrainPrime = () => {
  let task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestPrime = () => {
    let question = ' ';
    let correctResult = ' ';
    let isPrime = true;
    const number = getRandomInteger(100, 0);
    question = number;
    const sqrt = Math.sqrt(number);
    if (number === 1) {
      correctResult = 'no';
    } else if (number === 2 || number === 3) {
      correctResult = 'yes';
    } else if (number % 2 === 0 || number % 3 === 0) {
      correctResult = 'no';
    } else {
      for (let i = 5; i <= sqrt; i += 6) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        for (let i = 7; i <= sqrt; i += 6) {
          if (number % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        correctResult = 'yes';
      } else {
        correctResult = 'no';
      }
    }
    return { question, correctResult };
  };

  runGameEngine(getQuestPrime, task);
};
export default runBrainPrime;
