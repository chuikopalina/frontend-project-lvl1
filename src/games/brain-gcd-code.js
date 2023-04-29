#!/usr/bin/env node
import {runGameEngine} from '../index.js';
import {getRandomInteger} from '../utils.js';

const runBrainGcd = () => {
  let task = 'Find the greatest common divisor of given numbers.';
  const getQuestGcd = () => {
    let correctResult = 0;
    const numbers = [getRandomInteger(100, 1), getRandomInteger(100, 1)];
    const question = `${numbers[0]} ${numbers[1]}`;
    let y = numbers[0];
    let x = numbers[1];
    while (y) {
      const t = y;
      y = x % y;
      x = t;
      correctResult = x;
    }
    return { question, correctResult };
  };

  runGameEngine(getQuestGcd, task);
};
export default runBrainGcd;
