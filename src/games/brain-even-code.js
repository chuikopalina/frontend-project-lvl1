#!/usr/bin/env node
import {runGameEngine} from '../index.js';
import {getRandomInteger} from '../utils.js';


const runBrainEven = () => {
  let task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestEvenOrOdd = () => {
    const question = getRandomInteger(100000, 0);
    const correctResult = question % 2 === 0 ? 'yes' : 'no';
    return { question, correctResult };
  };

  runGameEngine(getQuestEvenOrOdd, task);
};
export default runBrainEven;
