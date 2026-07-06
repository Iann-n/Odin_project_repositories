let playerScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?: ");
}

function playRound(humanChoice, computerChoice)
{
    let humanChoiceSmall = humanChoice.toLowerCase();
    let computerChoiceSmall = computerChoice.toLowerCase();

    if (humanChoiceSmall === "rock" && computerChoiceSmall === "scissors")
    {
        playerScore = playerScore + 1;
        return "you win! rock beats scissor";
    }

    if (humanChoiceSmall === "rock" && computerChoiceSmall === "paper")
    {
        computerScore = computerScore + 1;
        return "you lose! paper beats rock";
    }

    if (humanChoiceSmall === "scissors" && computerChoiceSmall === "paper")
    {
        playerScore = playerScore + 1;
        return "you win! scissors beats paper";
    }

    if (humanChoiceSmall === "scissors" && computerChoiceSmall === "rock")
    {
        computerScore = computerScore + 1;
        return "you lose! rock beats scissors";
    }

    if (humanChoiceSmall === "paper" && computerChoiceSmall === "rock")
    {
        playerScore = playerScore + 1;
        return "you win! paper beats rock";
    }

    if (humanChoiceSmall === "paper" && computerChoiceSmall === "scissors")
    {
        computerScore = computerScore + 1;
        return "you lose! scissors beats paper";
    }

    else if (humanChoiceSmall == computerChoiceSmall)
    {
        return "Draw!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
    }

    if (playerScore > computerScore)
    {
        console.log("Player Wins!");
        return "Player Wins!";
    }

    if (playerScore < computerScore)
    {
        console.log("Computer Wins!");
        return "Computer Wins!";
    }

    else
    {
        console.log("Draw!");
        return "Draw!";
    }
}

playGame();