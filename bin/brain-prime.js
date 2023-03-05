#!/usr/bin/env node
import {nameQuestion} from "../src/cli.js";
import {myQuest} from "../src/index.js";
let name = nameQuestion();
console.log("Hello, " + name,"!");
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const randomInteger = () => {
	return Math.floor(Math.random() * 100);
};
const primeNumber = () => {
	let mistakeDetected = false;
	let question = " ";
	let correctResult = " ";
	let is_prime = true;
	for (let i = 0; i < 3; i++){
		let number = randomInteger();
		question = number;
		let sqrt = Math.sqrt(number);
		if (number === 2 | number === 3){
			correctResult = "yes";
		}else if(number % 2 === 0 || number % 3 === 0) {
			correctResult = "no";
		} else{
			for(let i = 5; i <= sqrt; i += 6){
				if (number % i === 0){
					is_prime = false;
					break;
				}
			}
			if (is_prime){
				for(let i=7; i <= sqrt; i += 6){
					if (number % i === 0){
						is_prime = false;
						break;
					}
				}
			}
			if (is_prime){
				correctResult = "yes";
			} else {
				correctResult = "no";
			}
		}
		mistakeDetected = myQuest(question,String(correctResult),name);
		if (mistakeDetected === true) {
			break;
		}
		if (mistakeDetected === false) {
			console.log(`Congratulations, ${name}!`);
		}
	}
};
primeNumber();
