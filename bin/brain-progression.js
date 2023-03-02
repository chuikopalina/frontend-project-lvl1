import {nameQuestion} from "../src/cli.js";
import {myQuest} from "../src/index.js";
let name = nameQuestion();

const randomInteger = () => {
	return Math.floor(Math.random() * 10);
};
const getRndInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
};
console.log("What number is missing in the progression?");
const getProgression = () => {
	let mistakeDetected = false;
	let correctResult = 0;
	let question = " ";
	for (let i = 0; i < 3; i++){
		let a = randomInteger();
		let progression = [];
		let n = getRndInteger(5,10);
		let lengthProgression = getRndInteger(5,10);
		progression[0] = n;
		for (let r = 1; r < lengthProgression; r++){
			progression[r] =  progression[r-1] + n;
		}
		correctResult = progression[a];
		progression[a] = "..";
		question = progression;
		mistakeDetected = myQuest(question,String(correctResult),name);
		if (mistakeDetected === true) {
			break;
		}
		if (mistakeDetected === false) {
			console.log("Congratulations,",name,"!");
		}
	}
};
getProgression();
