#!/usr/bin/env node
import {runGameEngine} from '../index.js';
import {getRandomInteger, getRndIntegerSegment} from '../utils.js';

const runBrainCalc = () => {
  let task = 'What is the result of the expression?';
  const getQuestCalc = () => {
    let correctResult = 0;
    let question = ' ';
    const operators = ['-', '*', '+'];
    const numbers = [getRandomInteger(10, 0), getRandomInteger(10, 0)];
    const operator = operators[getRndIntegerSegment(0, 2)];
    switch (operator) {
      case '-':
        correctResult = numbers[0] - numbers[1];
        break;
      case '+':
        correctResult = numbers[0] + numbers[1];
        break;
      case '*':
        correctResult = numbers[0] * numbers[1];
        break;
        default:
    }
    question = `${numbers[0]} ${operator} ${numbers[1]}`;
    return { question, correctResult };
  };

  runGameEngine(getQuestCalc, task);
};
export default runBrainCalc;
