import readlineSync from "readline-sync";

export const nameQuestion = () => {
	console.log("Welcome to the Brain Games!");
	const name = readlineSync.question("May I have your name?");
	return name;
};
