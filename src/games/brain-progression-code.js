#!/usr/bin/env node
import {runGameEngine} from '../index.js';
import {getRndIntegerSegment} from '../utils.js';

const runBrainProgression = () => {
  let task = 'What number is missing in the progression?';
  const getQuestProgression = () => {
    const progression = [];
    const n = getRndIntegerSegment(5, 10);
    const lengthProgression = getRndIntegerSegment(5, 10);
    const a = getRndIntegerSegment(0, lengthProgression - 1);
    progression[0] = n;
    for (let r = 1; r < lengthProgression; r += 1) {
      progression[r] = progression[r - 1] + n;
    }
    const correctResult = String(progression[a]);
    progression[a] = '..';
    const question = progression.join(' ');
    return { question, correctResult };
  };

  runGameEngine(getQuestProgression, task);
};
export default runBrainProgression;
