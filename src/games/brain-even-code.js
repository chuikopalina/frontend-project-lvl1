#!/usr/bin/env node
import { nameQuestion, gameLoop } from '../index.js';

export const BrainEven = () => {
  const name = nameQuestion();
  console.log(`Hello, ${name}`, '!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomInteger = () => Math.floor(Math.random() * 100000);

  const questResultEvenOrOdd = () => {
    const question = randomInteger();
    const correctResult = question % 2 === 0 ? 'yes' : 'no';
    return { question, correctResult };
  };

  gameLoop(questResultEvenOrOdd, name);
};
