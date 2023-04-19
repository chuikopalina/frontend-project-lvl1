#!/usr/bin/env node
import { nameQuestion } from './index.js';

const BrainGames = () => {
  const name = nameQuestion();
  console.log(`Hello, ${name}!`);
};
export default BrainGames;
