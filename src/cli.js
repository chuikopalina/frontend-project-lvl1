#!/usr/bin/env node
import readlineSync from 'readline-sync';

const runBrainGames = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`, '!');
};
export default runBrainGames;
