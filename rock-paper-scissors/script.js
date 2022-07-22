let score = 0;

function getComputerChoice(){
    let choice = ["Rock","Paper","Scissors"];
    let rand = choice[Math.floor(Math.random() * choice.length)];
    return rand;
}

function playRound(playerSelection,computerSelection)
{
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
       return ("It's a draw! ");
    }

    else if (playerSelection.toLowerCase() == "rock")
    {
        if (computerSelection.toLowerCase() == "scissors")
        {
            score++;
            return ("You Win! " + playerSelection + " beats " + computerSelection);
            
        }

        else {
            return ("You Lose! " + computerSelection + " beats " + playerSelection);
        }
    }
    
    else if (playerSelection.toLowerCase() == "paper")
    {
        if (computerSelection.toLowerCase() == "rock")
        {
            score++;
            return ("You Win! " + playerSelection + " beats " + computerSelection);
            
        }

        else {
            return ("You Lose! " + computerSelection + " beats " + playerSelection);
        }
    }

    else if (playerSelection.toLowerCase() == "scissors")
    {
        if (computerSelection.toLowerCase() == "paper")
        {
            score++;
            return ("You Win! " + playerSelection + " beats " + computerSelection);
            
        }

        else {
            return ("You Lose! " + computerSelection + " beats " + playerSelection);
        }
    }
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Rock,Paper,Scissors? : ", "rock");
        const computerSelection = getComputerChoice(); 
        console.log(playRound(playerSelection,computerSelection));
    }  
    console.log("Your total score was: " + score);
    
}

game();