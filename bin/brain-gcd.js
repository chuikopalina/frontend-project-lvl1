import {nameQuestion} from "/Users/palinachuiko/frontend-project-lvl1/src/cli.js";
import {myQuest} from "/Users/palinachuiko/frontend-project-lvl1/src/index.js";
let name = nameQuestion();
const randomInteger = () => {
	return Math.floor((Math.random() * 100) + 1);
};
console.log("Find the greatest common divisor of given numbers.");
const gcd = () => {
	let mistakeDetected = false;
	let correctResult = 0;
	let question = " ";
	for (let i = 0; i < 3; i++){
		let numbers = [randomInteger(),randomInteger()];
		question = numbers[0] + " " + numbers[1];
		let y = numbers[0];
		let x = numbers[1];
		while(y){
			let t = y;
			y = x % y;
			x = t;
		}
		correctResult = x;
		mistakeDetected = myQuest(question,String(correctResult),name);
		if (mistakeDetected === true) {
			break;
		}
		if (mistakeDetected === false) {
			console.log("Congratulations,",name,"!");
		}
	}
};
gcd();
