let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#para");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const genrandom = () => {
    let choice = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return choice[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const computerChoice = genrandom();

    if (userChoice === computerChoice) {
        msg.innerText = "It was a draw. Play again!";
        msg.style.backgroundColor = "#081b31";
        return; // exit early to prevent calling showWinner
    }

    let userWin = false;

    if (userChoice === "rock") {
        userWin = computerChoice === "scissors";
    } else if (userChoice === "paper") {
        userWin = computerChoice === "rock";
    } else if (userChoice === "scissors") {
        userWin = computerChoice === "paper";
    }

    showWinner(userWin, userChoice, computerChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
