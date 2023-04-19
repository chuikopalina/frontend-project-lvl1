#!/usr/bin/env node
import { nameQuestion, gameLoop } from '../index.js';

export const BrainGcd = () => {
  const name = nameQuestion();
  console.log(`Hello, ${name}`, '!');
  const randomInteger = () => Math.floor((Math.random() * 100) + 1);
  console.log('Find the greatest common divisor of given numbers.');

  const questResultGcd = () => {
    let correctResult = 0;
    const numbers = [randomInteger(), randomInteger()];
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

  gameLoop(questResultGcd, name);
};
