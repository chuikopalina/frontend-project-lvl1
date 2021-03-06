import {nameQuestion} from "/Users/palinachuiko/frontend-project-lvl1/src/cli.js";
import {myQuest} from "/Users/palinachuiko/frontend-project-lvl1/src/index.js";
let name = nameQuestion();
//console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

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
		if (operator === "-") {
			correctResult = numbers[0] - numbers[1];
			question = numbers[0] + "-" + numbers[1];
		}else if (operator === "+") {
			correctResult = numbers[0] + numbers[1];
			question = numbers[0] + "+" + numbers[1];
		}else {
			correctResult = numbers[0] * numbers[1];
			question = numbers[0] + "*" + numbers[1];
		}
		mistakeDetected = myQuest(question,String(correctResult),name);
		if (mistakeDetected === true) {
			break;
		}		
	}	
	if (mistakeDetected === false) {
		console.log("Congratulations,",name,"!");
	}				
};
evenOrOdd();
