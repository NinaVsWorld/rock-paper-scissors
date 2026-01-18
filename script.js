let humanScore = 0;
let computerScore = 0;
let yourChoice;
let compChoice;
const DELAY = 750;
const computerWait = time => new Promise(resolve => setTimeout(resolve, time));
const displayHumanChoice = document.querySelector(".human-choice");
const displayComputerChoice = document.querySelector(".computer-choice");
const img = document.createElement("img");

function startOn() {
    const startOverlay = document.querySelector(".start-overlay");
    startOverlay.style.display = "flex";
    startOverlay.style.justifyContent = "center";
}

const startGame = document.querySelector(".start-button");
startGame.addEventListener("click", () => {
    document.querySelector(".start-overlay").style.display = "none";
})

function endOn() {
    const endOverlay = document.querySelector(".end-overlay");
    endOverlay.style.display = "flex";
    endOverlay.style.justifyContent = "center";
    endOverlay.style.alignItems = "center";

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
    await computerWait(DELAY);
    compChoice = getComputerChoice();
    playRound(yourChoice, compChoice);

    if (humanScore === 5 || computerScore === 5) {
        endOn();
    }
})

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", async () => {
    img.src = "icons/drawing.png";
    displayHumanChoice.replaceChild(img, displayHumanChoice.lastElementChild);
    yourChoice = "paper";
    computerPondering();
    await computerWait(DELAY);
    compChoice = getComputerChoice();
    playRound(yourChoice, compChoice);

    if (humanScore === 5 || computerScore === 5) {
        endOn();
    }
})

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", async () => {
    img.src = "icons/scissor-tool.png";
    displayHumanChoice.replaceChild(img, displayHumanChoice.lastElementChild);
    yourChoice = "scissors";
    computerPondering();
    await computerWait(DELAY);
    compChoice = getComputerChoice();
    playRound(yourChoice, compChoice);

    if (humanScore === 5 || computerScore === 5) {
        endOn();
    }
})

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