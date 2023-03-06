#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { nameQuestion } from '../src/cli.js';
// eslint-disable-next-line import/extensions
import { myQuest } from '../src/index.js';

const name = nameQuestion();
// eslint-disable-next-line no-console
console.log(`Hello, ${name}`, '!');
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// eslint-disable-next-line no-console
console.log('What number is missing in the progression?');
const getProgression = () => {
  let mistakeDetected = false;
  let correctResult = 0;
  let question = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const progression = [];
    const n = getRndInteger(5, 10);
    const lengthProgression = getRndInteger(5, 10);
    const a = getRndInteger(0, lengthProgression - 1);
    progression[0] = n;
    // eslint-disable-next-line no-plusplus
    for (let r = 1; r < lengthProgression; r++) {
      progression[r] = progression[r - 1] + n;
    }
    correctResult = progression[a];
    progression[a] = '..';
    question = progression.join(' ');
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
getProgression();
