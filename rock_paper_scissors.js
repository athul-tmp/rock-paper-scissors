let hand = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return hand[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++;
        return "You win! Rock beats Scissors"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        return "You win! Paper beats Rock"
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++;
        return "You win! Scissors beats Paper"
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Rock is beaten by Paper"
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Paper is beaten by Scissors"
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Scissors is beaten by Rock"
    }
}

function playGame(){
    let playerSelection;
    let computerSelection;
    // for (let i = 1; i < 6; i++) {
    //     playerSelection = prompt("Rock, Paper, or Scissors?:")
    //     playerSelection = playerSelection.toLowerCase();
    //     computerSelection = getComputerChoice();
    //     console.log("Round = " + i);
    //     console.log("Your choice: " + playerSelection + ", Computer's choice: " + computerSelection);
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log("Your score: " + userScore + ", Computer's score: " + computerScore);
    // }
    
    if (userScore > computerScore) {
        console.log("You won the game!")
    }
    else if (computerScore > userScore) {
        console.log("You lost the game. Good luck next time!")
    }
    else {
        console.log("The game is tied!")
    }

}

playGame();