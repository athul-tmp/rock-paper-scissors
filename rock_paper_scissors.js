let hand = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    return hand[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    round++;
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
    
    const buttons = document.querySelectorAll('.choices > button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            playerSelection = button.id
            computerSelection = getComputerChoice()
            const outcome = document.querySelector(".text")
            outcome.firstElementChild.textContent = playRound(playerSelection, computerSelection)
            outcome.lastElementChild.textContent = "Round: " + round

            if (playerSelection === "rock") {
                playerSelection = "🪨"
            }
            else if (playerSelection === "paper") {
                playerSelection = "📄"
            }
            else {
                playerSelection = "✂️"
            }

            if (computerSelection === "rock") {
                computerSelection = "🪨"
            }
            else if (computerSelection === "paper") {
                computerSelection = "📄"
            }
            else {
                computerSelection = "✂️"
            }
            const userChoice = document.querySelector(".user > .choice")
            userChoice.textContent = playerSelection 
            const computerChoice = document.querySelector(".computer > .choice")
            computerChoice.textContent = computerSelection

            const displayedPlayerScore = document.querySelector(".user > .score") 
            displayedPlayerScore.textContent = "Score: " + playerScore
            const displayedComputerScore = document.querySelector(".computer > .score") 
            displayedComputerScore.textContent = "Score: " + computerScore

            if (computerScore == 5) {
            buttons.forEach((button) => {button.disabled = true});
            outcome.firstElementChild.textContent = "Oops! You lost the game!"
            outcome.lastElementChild.textContent = ""
            
            const playAgain = document.querySelector(".play-again > button")
            playAgain.classList.toggle("inactive")
            }
            if (playerScore == 5) {
            buttons.forEach((button) => {button.disabled = true});
            outcome.firstElementChild.textContent = "Congrats! You won the game!"
            outcome.lastElementChild.textContent = ""
            const playAgain = document.querySelector(".play-again > button")
            playAgain.classList.toggle("inactive")
            }
          
        });
    });
}

playGame();



