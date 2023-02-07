//Get computer choice (Rock Paper Scissors)//
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice = ""
    if (randomNumber == 1) {computerChoice = "rock"} 
        else if (randomNumber == 2) {computerChoice = "paper"}
        else {computerChoice = "scissors"}
    return computerChoice
}

let computerSelection = getComputerChoice();

//Get player choice with prompt//
    //If answer is not Rock, Paper or Scissors (case insensitive) return error//
    //If answer is valid store update value and stop loop//
let playerSelection = ""
for (i = 0; i < 1; i) {
let playerPrompt = prompt("Choose between Rock, Paper and Scissors", "").toLowerCase();
if (playerPrompt == "rock" || playerPrompt == "paper" || playerPrompt == "scissors") {playerSelection = playerPrompt;
    i++}
else {console.log("Please enter a valid input")}}


//Play a round by calling both computer and player choice//
        //Make conditions for winning or losing game//
function playRound(player, computer) {
    if (player == computer) {return "It's a tie! Computer also chose Rock!"}
    else if (player == "rock" && computer == "paper") {return "You lose! Computer chose Paper!"}
    else if (player == "rock" && computer == "scissors") {return "You win! Computer chose Scissors!"}
    else if (player =="paper" && computer == "rock") {return "You win! Computer chose Rock"}
    else if (player =="paper" && computer == "scissors") {return "You lose! Computer chose Scissors!"}
    else if (player =="scissors" && computer == "rock") {return "You lose! Computer chose Rock!"}
    else {return "You win! Computer chose Paper!"}
}

//Print results//
console.log("Your choice : " + playerSelection)
console.log("Computer's choice : " + computerSelection)
console.log(playRound(playerSelection, computerSelection))