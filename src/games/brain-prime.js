#!/usr/bin/env node
import { myQuest, nameQuestion, gameLoop } from './index.js';

const name = nameQuestion();
console.log(`Hello, ${name}`, '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const randomInteger = () => Math.floor(Math.random() * 100);

const questResultPrime = () => {
  let question = ' ';
  let correctResult = ' ';
  let is_prime = true;
  const number = randomInteger();
  question = number;
  const sqrt = Math.sqrt(number);
  if (number === 2 | number === 3) {
    correctResult = 'yes';
  } else if (number % 2 === 0 || number % 3 === 0) {
    correctResult = 'no';
  } else {
    for (let i = 5; i <= sqrt; i += 6) {
		  if (number % i === 0) {
			is_prime = false;
			break;
		  }
		}
		if (is_prime) {
		  for (let i = 7; i <= sqrt; i += 6) {
			if (number % i === 0) {
			  is_prime = false;
			  break;
			}
		  }
		}
		if (is_prime) {
		  correctResult = 'yes';
		} else {
		  correctResult = 'no';
		}
	}
  return {question, correctResult};
}

gameLoop(questResultPrime, name);
