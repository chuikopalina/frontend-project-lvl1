import readlineSync from "readline-sync";

export const nameQuestion = () => {
	const name = readlineSync.question("May I have your name?");
	console.log("Hello," + name);
	return name;
};
