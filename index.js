const choices = ["rock", "paper", "scissors"];
const numRounds = 5;

function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function getHumanChoice() {
	const humanChoice = prompt("Please choose rock, paper or scissors");
	if (choices.includes(humanChoice.toLowerCase())) {
		return humanChoice;
	}
	alert("You entered an invalid choice");
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
	if (humanChoice === computerChoice) {
		console.log("It's a tie!");
	} else if (
		(choices.indexOf(humanChoice) === 0 &&
			choices.indexOf(computerChoice) === 2) ||
		(choices.indexOf(humanChoice) === 1 &&
			choices.indexOf(computerChoice) === 0) ||
		(choices.indexOf(humanChoice) === 2 &&
			choices.indexOf(computerChoice) === 1)
	) {
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		humanScore++;
	} else {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		computerScore++;
	}
	return [humanScore, computerScore];
}

function playGame() {
	let humanScore = 0,
		computerScore = 0;
	for (let i = 0; i < numRounds; i++) {
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();
		[humanScore, computerScore] = playRound(
			humanChoice,
			computerChoice,
			humanScore,
			computerScore
		);
		console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
	}
	if (humanScore > computerScore) {
		console.log("You win the game!");
	} else if (humanScore < computerScore) {
		console.log("You lose the game!");
	} else {
		console.log("It's a tie!");
	}
}

playGame();
