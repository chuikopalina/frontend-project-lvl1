import readlineSync from "readline-sync";
export const myQuest = (question,correctResult,name) => {
	let mistakeDetected = false;
	console.log("Question:",question);
	let userResponse = (readlineSync.question("Your answer:"));
	if (correctResult === userResponse) {
		console.log("Correct!");
	}else {
		console.log("'",userResponse, "' is wrong answer ;(. Correct answer was '",correctResult,"'.");
		console.log(`Let's try again, ${name}!`);
		mistakeDetected = true;
	}
	return mistakeDetected;
};
