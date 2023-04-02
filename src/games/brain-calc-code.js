#!/usr/bin/env node
import { myQuest, nameQuestion, gameLoop } from './index.js';

const name = nameQuestion();
console.log(`Hello, ${name}`, '!');
const randomInteger = () => Math.floor(Math.random() * 10);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('What is the result of the expression?');

const questResultCalc = () => {
  let correctResult = 0;
  let question = ' ';
  const operators = ['-', '*', '+'];
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
  return {question, correctResult};
}

gameLoop(questResultCalc, name);
