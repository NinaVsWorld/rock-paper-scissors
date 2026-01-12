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

// Returns the possible outcomes when human choice is rock
function humanChoiceIsRock(computerChoice) {
    switch (computerChoice) {
        case "rock":
            return "It's a tie!";
        case "paper":
            computerScore++;
            return "You lose! Paper beats Rock."
        default:
            humanScore++;
            return "You win! Rock beats Scissors."
    }
}

// Returns possible outcomes when human choice is paper
function humanChoiceIsPaper(computerChoice) {
    switch (computerChoice) {
        case "rock":
            humanScore++;
            return "You win! Paper beats Rock."
        case "paper":
            return "It's a tie!";
        default:
            computerScore++;
            return "You lose! Scissors beats Paper";
    }
}

// Returns possible outcomes when human choice is scissors
function humanChoiceIsScissors(computerChoice) {
    switch (computerChoice) {
        case "rock":
            computerScore++;
            return "You lose! Rock beats Scissors."
        case "paper":
            humanScore++;
            return "You win! Scissors beats Paper.";
        default:
            return "It's a tie!";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        console.log(humanChoiceIsRock(computerChoice));
    } else if (humanChoice === "paper") {
        console.log(humanChoiceIsPaper(computerChoice));
    } else {
        console.log(humanChoiceIsScissors(computerChoice));
    }
}

// Plays five rounds
function playGame() {
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

playGame();