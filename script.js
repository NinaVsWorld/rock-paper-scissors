// Link start button to game page
/*const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
    window.location.replace("index.html");
});*/

let humanScore = 0;
let computerScore = 0;

function computerPondering() {
    const div = document.createElement("div");
    div.textContent = "?";
    div.classList.add("question-mark");
    displayComputerChoice.replaceChild(div, displayComputerChoice.lastElementChild);
}

let yourChoice;
let compChoice;
const computerWait = time => new Promise(resolve => setTimeout(resolve, time));
const displayHumanChoice = document.querySelector(".human-choice");
const displayComputerChoice = document.querySelector(".computer-choice");
const img = document.createElement("img");

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", async () => {
    img.src = "icons/draw.png";
    displayHumanChoice.replaceChild(img, displayHumanChoice.lastElementChild);
    yourChoice = "rock";
    computerPondering();
    await computerWait(750);
    compChoice = getComputerChoice();
    playRound(yourChoice, compChoice);
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