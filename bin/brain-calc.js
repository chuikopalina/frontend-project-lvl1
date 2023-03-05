#!/usr/bin/env node
import {nameQuestion} from "../src/cli.js";
import {myQuest} from "../src/index.js";
let name = nameQuestion();
console.log("Hello, " + name,"!");
const randomInteger = () => {
	return Math.floor(Math.random() * 10);
};
const getRndInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
};
console.log("What is the result of the expression?");
const evenOrOdd = () => {
	let mistakeDetected = false;
	let operators = ["-","*","+"];
	let correctResult = 0;
	let question = " ";
	for (let i = 0; i < 3; i++){
		let numbers = [randomInteger(),randomInteger()];
		let operator = operators[getRndInteger(0,2)];
		if (operator === "-"){
			correctResult = numbers[0] - numbers[1];
			question = `${numbers[0]} - ${numbers[1]}`;
		}else if (operator === "+") {
			correctResult = numbers[0] + numbers[1];
			question = `${numbers[0]} + ${numbers[1]}`;
		}else {
			correctResult = numbers[0] * numbers[1];
			question = `${numbers[0]} * ${numbers[1]}`;
		}
		mistakeDetected = myQuest(question,String(correctResult),name);
		if (mistakeDetected === true) {
			break;
		}		
	}	
	if (mistakeDetected === false) {
		console.log(`Congratulations, ${name}!`);
	}				
};
evenOrOdd();
