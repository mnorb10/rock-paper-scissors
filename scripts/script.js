/* javascript*/
function playerPlay() 
{let randomNumber = (Math.floor(Math.random() * 3)); 
    if (randomNumber==0){playerMove = "Rock";} 
    else if (randomNumber==1) {playerMove = "Paper";} 
    else {playerMove="Scissors";}
    return(playerMove)
}

/*Computer Random Move (rock, paper, or scissors)*/
function computerPlay() 
{let randomNumber = (Math.floor(Math.random() * 3)); 
    if (randomNumber==0){computerMove = "Rock";} 
    else if (randomNumber==1) {computerMove = "Paper";} 
    else {computerMove="Scissors";}
    return(computerMove)
}

function playRound(playerSelection,computerSelection)
{
    if (computerSelection==playerSelection) {winner=alert("draw");}
    else if ((computerSelection =="Rock") && (playerSelection=="Paper")) {winner=alert("You Win!");}
    else if ((computerSelection =="Rock") && (playerSelection=="Scissors")) {winner=alert("You lose!");}
    else if ((computerSelection =="Paper") && (playerSelection=="Rock")) {winner=alert("You lose!");}
    else if ((computerSelection =="Paper") && (playerSelection=="Scissors")) {winner=alert("You Win!");}
    else if ((computerSelection =="Scissors") && (playerSelection=="Rock")) {winner=alert("You Win!");}
    else if ((computerSelection =="Scissors") && (playerSelection=="Paper")) {winner=alert("You lose!");}
    else {winner=alert("you win");}
    return(winner)
}
const playerSelection = playerPlay()
const computerSelection = computerPlay()

console.log(playRound(playerSelection,computerSelection),[playerSelection,computerSelection])

