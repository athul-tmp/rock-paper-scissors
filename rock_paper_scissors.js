let hand = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return hand[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock"
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
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
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id
            computerSelection = getComputerChoice()
            const outcome = document.querySelector(".text > h2")
            outcome.textContent = playRound(playerSelection, computerSelection)
            const points = document.querySelector(".points")
            points.firstElementChild.textContent = "Your points: " + playerScore 
            points.lastElementChild.textContent = "Computer's points: " + computerScore 

            if (computerScore == 5) {
            buttons.forEach((button) => {button.disabled = true});

            }
            if (playerScore == 5) {
            buttons.forEach((button) => {button.disabled = true});
            }
          
        });
    });
}

playGame();



