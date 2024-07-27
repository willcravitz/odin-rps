const choices = ["rock", "paper", "scissors"];
const toWin = 5;
let humanScore = 0,
	computerScore = 0;
let inGame = false;

function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
	if (inGame == false) {
		return;
	}
	if (humanChoice === computerChoice) {
		document.getElementById(
			"outcome"
		).textContent = `your ${humanChoice} ties ${computerChoice}.`;
	} else if (
		(choices.indexOf(humanChoice) === 0 &&
			choices.indexOf(computerChoice) === 2) ||
		(choices.indexOf(humanChoice) === 1 &&
			choices.indexOf(computerChoice) === 0) ||
		(choices.indexOf(humanChoice) === 2 &&
			choices.indexOf(computerChoice) === 1)
	) {
		document.getElementById(
			"outcome"
		).textContent = `yes! your ${humanChoice} beats ${computerChoice}.`;
		humanScore++;
	} else {
		document.getElementById(
			"outcome"
		).textContent = `no! your ${humanChoice} loses to ${computerChoice}.`;
		computerScore++;
	}
	updateScore();
}

function updateScore() {
	document.getElementById("human").textContent = humanScore;
	document.getElementById("ai").textContent = computerScore;
	if (humanScore === toWin) {
		document.getElementById("outcome").textContent = "You win the game!";
		endGame();
	} else if (computerScore === toWin) {
		document.getElementById("outcome").textContent = "You lose the game!";
		endGame();
	}
}

function startGame() {
	inGame = true;
	(humanScore = 0), (computerScore = 0);
	document.getElementById("start").style.display = "none";
	document.getElementById("scoreboard").style.display = "block";
	choices.forEach((choice) => {
		choiceButton = document.getElementById(choice);
		choiceButton.classList.add("clickable");
	});
}

function endGame() {
	inGame = false;
	document.getElementById("end").style.display = "inline";
	choices.forEach((choice) => {
		choiceButton = document.getElementById(choice);
		choiceButton.classList.remove("clickable");
	});
}

function reset() {
	document.getElementById("start").style.display = "inline";
	document.getElementById("scoreboard").style.display = "none";
	document.getElementById("end").style.display = "none";
}

choices.forEach((choice) => {
	choiceButton = document.getElementById(choice);
	choiceButton.addEventListener("click", () => {
		playRound(choice, getComputerChoice());
	});
});
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("end").addEventListener("click", reset);
