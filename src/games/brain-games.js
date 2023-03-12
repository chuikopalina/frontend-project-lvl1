#!/usr/bin/env node
// console.log("Welcome to the Brain Games!");
// eslint-disable-next-line import/extensions
import { nameQuestion } from './cli.js';

const name = nameQuestion();
// eslint-disable-next-line no-console
console.log(`Hello, ${name}`, '!');
