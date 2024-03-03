let hand = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return hand[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors"
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock"
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper"
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors"
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
// console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

