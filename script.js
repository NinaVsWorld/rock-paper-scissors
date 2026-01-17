// Link start button to game page
/*const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
    window.location.replace("index.html");
});*/

let humanScore = 0;
let computerScore = 0;

// Randomly returns either 0, 1 or 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPondering() {
    const computerChoice = document.querySelector(".computer-choice");
    const div = document.createElement("div");
    div.textContent = "?";
    div.classList.add("question-mark");
    computerChoice.replaceChild(div, computerChoice.lastElementChild);
}

// Prompt user for choice out of rock, paper or scissors and return
// their choice as a string
// Add event listener to each button, rock paper or scissors
// The function should return a string which we can use to determine winners in playRound
let yourChoice;
let compChoice;
const computerWait = time => new Promise(resolve => setTimeout(resolve, time));

function setPlayersChoices() {
    const parentContainer = document.querySelector(".container");
    const humanChoice = document.querySelector(".human-choice");
    const img = document.createElement("img");
    const waitTime = 750;

    parentContainer.addEventListener("click", async (event) => {
        if (event.target && (event.target.matches(".rock") || event.target.matches(".rock-img"))) {
            img.src = "icons/draw.png";
            humanChoice.replaceChild(img, humanChoice.lastElementChild);
            yourChoice = "rock";
            computerPondering();
            await computerWait(waitTime);
            compChoice = getComputerChoice();
        } else if (event.target && (event.target.matches(".paper") || event.target.matches(".paper-img"))) {
            img.src = "icons/drawing.png";
            humanChoice.replaceChild(img, humanChoice.lastElementChild);
            yourChoice = "paper";
            computerPondering();
            await computerWait(waitTime);
            compChoice = getComputerChoice();
        } else if (event.target && (event.target.matches(".scissors") || event.target.matches(".scissors-png"))) {
            img.src = "icons/scissor-tool.png";
            humanChoice.replaceChild(img, humanChoice.lastElementChild);
            yourChoice = "scissors";
            computerPondering();
            await computerWait(waitTime);
            compChoice = getComputerChoice();
        }
    });
}

setPlayersChoices();

// Randomly generates computer choice between rock, paper or scissors
// Returns the choice as a string
function getComputerChoice() {
    const max = 3; 
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[getRandomInt(max)];
    const computerChoice = document.querySelector(".computer-choice");
    const img = document.createElement("img");

    if (choice === "rock") {
        computerChoice.removeChild(computerChoice.lastElementChild);
        img.src = "icons/draw.png";
        computerChoice.appendChild(img);
    } else if (choice === "paper") {
        computerChoice.removeChild(computerChoice.lastElementChild);
        img.src = "icons/drawing.png";
        computerChoice.appendChild(img);
    } else if (choice === "scissors") {
        computerChoice.removeChild(computerChoice.lastElementChild);
        img.src = "icons/scissor-tool.png";
        computerChoice.appendChild(img);
    }
    return choice;
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