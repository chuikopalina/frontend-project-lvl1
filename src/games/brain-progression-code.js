#!/usr/bin/env node
import { myQuest, nameQuestion, gameLoop } from '../index.js';

export const BrainProgression = () => {
  const name = nameQuestion();
  console.log(`Hello, ${name}`, '!');

  const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('What number is missing in the progression?');

  const questResultProgression = () => {
    const progression = [];
    const n = getRndInteger(5, 10);
    const lengthProgression = getRndInteger(5, 10);
    const a = getRndInteger(0, lengthProgression - 1);
    progression[0] = n;
    for (let r = 1; r < lengthProgression; r++) {
      progression[r] = progression[r - 1] + n;
    }
    const correctResult = String(progression[a]);
    progression[a] = '..';
    const question = progression.join(' ');
    return { question, correctResult };
  };

  gameLoop(questResultProgression, name);
};
