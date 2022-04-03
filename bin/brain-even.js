import readlineSync from "readline-sync";
import {nameQuestion} from "/Users/palinachuiko/frontend-project-lvl1/src/cli.js";
let name = nameQuestion();
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

const randomInteger = () => {
	return Math.floor(Math.random() * 100000);
};

const evenOrOdd = () => {
	for (let i = 0; i < 3; i++){
		let number = randomInteger();
		let respors = number % 2 === 0 ? "yes" : "no";
		console.log("Question:",number);
		let userResponse = readlineSync.question("Your answer:");
		if (respors === userResponse) {
			console.log("Correct!");
		}else {
			console.log("'",userResponse, "' is wrong answer ;(. Correct answer was '",respors,"'.");
			console.log("Let's try again,",name,"!");
			break;
		}
		if (i === 2) {
			console.log("Congratulations,",name,"!");
		}
	}			
};
evenOrOdd();
