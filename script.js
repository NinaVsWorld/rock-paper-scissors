// Link start button to game page
/*
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
window.location.replace("index.html");
}); */

let humanScore = 0;
let computerScore = 0;
let yourChoice;
let compChoice;
const computerWait = time => new Promise(resolve => setTimeout(resolve, time));
const displayHumanChoice = document.querySelector(".human-choice");
const displayComputerChoice = document.querySelector(".computer-choice");
const img = document.createElement("img");

function on() {
    const endOverlay = document.querySelector("#end-overlay");
    endOverlay.style.display = "flex";
    endOverlay.style.justifyContent = "center";

    const winnerMessage = () => {
        if (humanScore > computerScore) {
            return "You won Rock Paper Scissors!";
        } else {
            return "Computer won Rock Paper Scissors! Better luck next time.";
        }
    }
    document.querySelector(".winner").textContent = winnerMessage();
}

const reloadGame = document.querySelector(".end-button");
reloadGame.addEventListener("click", () => {
    location.reload();
})

function computerPondering() {
    const div = document.createElement("div");
    div.textContent = "?";
    div.classList.add("question-mark");
    displayComputerChoice.replaceChild(div, displayComputerChoice.lastElementChild);
}

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", async () => {
    img.src = "icons/draw.png";
    displayHumanChoice.replaceChild(img, displayHumanChoice.lastElementChild);
    yourChoice = "rock";
    computerPondering();
    await computerWait(750);
    compChoice = getComputerChoice();
    playRound(yourChoice, compChoice);

    if (humanScore === 5 || computerScore === 5) {
        console.log("end game");
        on();
    }
})

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", async () => {
    img.src = "icons/drawing.png";
    displayHumanChoice.replaceChild(img, displayHumanChoice.lastElementChild);
    yourChoice = "paper";
    computerPondering();
    await computerWait(750);
    compChoice = getComputerChoice();
    playRound(yourChoice, compChoice);

    if (humanScore === 5 || computerScore === 5) {
        console.log("end game");
        on();
    }
})

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", async () => {
    img.src = "icons/scissor-tool.png";
    displayHumanChoice.replaceChild(img, displayHumanChoice.lastElementChild);
    yourChoice = "scissors";
    computerPondering();
    await computerWait(750);
    compChoice = getComputerChoice();
    playRound(yourChoice, compChoice);

    if (humanScore === 5 || computerScore === 5) {
        console.log("end game");
        on();
    }
})

// Randomly generates computer choice between rock, paper or scissors
// Returns the choice as a string
function getComputerChoice() {
    const max = 3; 
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * max)];
    const img = document.createElement("img");

    if (choice === "rock") {
        img.src = "icons/draw.png";
        displayComputerChoice.replaceChild(img, displayComputerChoice.lastElementChild);
    } else if (choice === "paper") {
        img.src = "icons/drawing.png";
        displayComputerChoice.replaceChild(img, displayComputerChoice.lastElementChild);
    } else if (choice === "scissors") {
        img.src = "icons/scissor-tool.png";
        displayComputerChoice.replaceChild(img, displayComputerChoice.lastElementChild);
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    const showHumanScore = document.querySelector(".human-score");
    const showComputerScore = document.querySelector(".computer-score");

    if (humanChoice === computerChoice) {
        // do nothing
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        showHumanScore.textContent = `You: ${humanScore}`;
    } else {
        computerScore++;
        showComputerScore.textContent = `Computer: ${computerScore}`;
    }
}