import {nameQuestion} from "../src/cli.js";
import {myQuest} from "../src/index.js";
let name = nameQuestion();
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

const randomInteger = () => {
	return Math.floor(Math.random() * 100000);
};

const evenOrOdd = () => {
	let mistakeDetected = false;
	for (let i = 0; i < 3; i++){
		let number = randomInteger();
		let correctResult = number % 2 === 0 ? "yes" : "no";
		mistakeDetected = myQuest(number,correctResult,name);
		if (mistakeDetected === true) {
			break;
		}
	}
	if (mistakeDetected === false) {
		console.log("Congratulations,",name,"!");
	}			
};
evenOrOdd();
