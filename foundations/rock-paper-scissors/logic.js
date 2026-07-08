let playerScore = 0;
let computerScore = 0;
let gameOver = false

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1/3)
    {
        return "rock";
    }

    if (randomNumber < 2/3)
    {
        return "paper";
    }

    else
    {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice)
{
    let humanChoiceSmall = humanChoice.toLowerCase();
    let computerChoiceSmall = computerChoice.toLowerCase();

    if (humanChoiceSmall === "rock" && computerChoiceSmall === "scissors")
    {
        playerScore = playerScore + 1;
        let result = document.getElementById("round-result");
        result.textContent = "you win! rock beats scissor";

        let pScore = document.getElementById("player-score");
        pScore.textContent = playerScore;

        let cScore = document.getElementById("computer-score");
        cScore.textContent = computerScore;
    }

    if (humanChoiceSmall === "rock" && computerChoiceSmall === "paper")
    {
        computerScore = computerScore + 1;
        let result = document.getElementById("round-result");
        result.textContent = "you lose! paper beats rock";
        
        let pScore = document.getElementById("player-score");
        pScore.textContent = playerScore;

        let cScore = document.getElementById("computer-score");
        cScore.textContent = computerScore;
    }

    if (humanChoiceSmall === "scissors" && computerChoiceSmall === "paper")
    {
        playerScore = playerScore + 1;
        let result = document.getElementById("round-result");
        result.textContent = "you win! scissors beats paper";
        
        let pScore = document.getElementById("player-score");
        pScore.textContent = playerScore;

        let cScore = document.getElementById("computer-score");
        cScore.textContent = computerScore;
    }

    if (humanChoiceSmall === "scissors" && computerChoiceSmall === "rock")
    {
        computerScore = computerScore + 1;
        let result = document.getElementById("round-result");
        result.textContent = "you lose! rock beats scissors";
        
        let pScore = document.getElementById("player-score");
        pScore.textContent = playerScore;

        let cScore = document.getElementById("computer-score");
        cScore.textContent = computerScore;
    }

    if (humanChoiceSmall === "paper" && computerChoiceSmall === "rock")
    {
        playerScore = playerScore + 1;
        let result = document.getElementById("round-result");
        result.textContent = "you win! paper beats rock";
        
        let pScore = document.getElementById("player-score");
        pScore.textContent = playerScore;

        let cScore = document.getElementById("computer-score");
        cScore.textContent = computerScore;
    }

    if (humanChoiceSmall === "paper" && computerChoiceSmall === "scissors")
    {
        computerScore = computerScore + 1;
        let result = document.getElementById("round-result");
        result.textContent = "you lose! scissors beats paper";
        
        let pScore = document.getElementById("player-score");
        pScore.textContent = playerScore;

        let cScore = document.getElementById("computer-score");
        cScore.textContent = computerScore;
    }

    else if (humanChoiceSmall == computerChoiceSmall)
    {
        let result = document.getElementById("round-result");
        result.textContent = "Draw!";
        
        let pScore = document.getElementById("player-score");
        pScore.textContent = playerScore;

        let cScore = document.getElementById("computer-score");
        cScore.textContent = computerScore;
    }
}


const buttons = document.querySelectorAll("button");
buttons.forEach(element => {
    element.addEventListener("click", () => {
        if (!gameOver) {
            playRound(element.textContent, getComputerChoice());
        }

        if (playerScore == 3 && computerScore < 3)
        {
            let result = document.getElementById("round-result");
            result.textContent = "Player wins the game! Refresh to play again.";
            gameOver = true;
        }

        else if (computerScore == 3 && playerScore < 3)
        {
            let result = document.getElementById("round-result");
            result.textContent = "Computer wins the game! Refresh to play again";
            gameOver = true;
        }

    })
});