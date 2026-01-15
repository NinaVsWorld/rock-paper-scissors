let humanScore = 0;
let computerScore = 0;

// Randomly returns either 0, 1 or 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Randomly generates computer choice between rock, paper or scissors
function getComputerChoice() {
    const max = 3; 
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(max)];
}

// Prompt user for choice out of rock, paper or scissors and return
// their choice as a string
function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    switch (choice.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
   if (humanChoice === computerChoice) {
    console.log("It's a tie!");
   } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
   } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
   } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
   } else {
    console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
   }
}

// Plays five rounds
/*function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();*/