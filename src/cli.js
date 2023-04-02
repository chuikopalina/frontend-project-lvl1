#!/usr/bin/env node
import { nameQuestion } from './index.js';

export const BrainGames = () => {
  const name = nameQuestion();
  console.log(`Hello, ${name}`, '!');	
}
