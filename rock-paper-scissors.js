const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

const playerScoreElement =
document.getElementById("playerScore");

const computerScoreElement =
document.getElementById("computerScore");

const resultElement =
document.getElementById("result");

const tauntElement =
document.getElementById("taunt");

const countdownElement =
document.getElementById("countdown");

let playerScore = 0;
let computerScore = 0;

const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

const taunts = [
    "🤖 Predictable.",
    "🤖 Too easy.",
    "🤖 I saw that coming.",
    "🤖 Better luck next round.",
    "🤖 Calculating your defeat..."
];

function delay(ms){
    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}

async function playMove(move){

    const buttons =
    document.querySelectorAll("button");

    buttons.forEach(btn =>
        btn.disabled = true
    );

    playerHand.textContent = "✊";
    computerHand.textContent = "✊";

    playerHand.classList.add("shake");
    computerHand.classList.add("shake");

    countdownElement.textContent = "Rock...";
    await delay(500);

    countdownElement.textContent = "Paper...";
    await delay(500);

    countdownElement.textContent = "Scissors...";
    await delay(500);

    countdownElement.textContent = "SHOOT!";

    // TEMPORARY MOCK DATA
    const moves = [
        "rock",
        "paper",
        "scissors"
    ];

    const computerMove =
        moves[Math.floor(Math.random()*3)];

    playerHand.classList.remove("shake");
    computerHand.classList.remove("shake");

    playerHand.textContent =
        emojis[move];

    computerHand.textContent =
        emojis[computerMove];

    let winner = "";

    if(move === computerMove){
        winner = "draw";
    }
    else if(
        (move==="rock" && computerMove==="scissors") ||
        (move==="paper" && computerMove==="rock") ||
        (move==="scissors" && computerMove==="paper")
    ){
        winner = "player";
    }
    else{
        winner = "computer";
    }

    if(winner==="player"){
        playerScore++;
        resultElement.textContent =
            "You Win!";
    }
    else if(winner==="computer"){
        computerScore++;
        resultElement.textContent =
            "Computer Wins!";
    }
    else{
        resultElement.textContent =
            "It's a Draw!";
    }

    playerScoreElement.textContent =
        playerScore;

    computerScoreElement.textContent =
        computerScore;

    tauntElement.textContent =
        taunts[Math.floor(Math.random()*taunts.length)];

    buttons.forEach(btn =>
        btn.disabled = false
    );
}