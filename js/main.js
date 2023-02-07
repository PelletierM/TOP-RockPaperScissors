//Get computer choice (Rock Paper Scissors)//
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice = ""
    if (randomNumber == 1) {computerChoice = "rock"} 
        else if (randomNumber == 2) {computerChoice = "paper"}
        else {computerChoice = "scissors"}
    return computerChoice
}

//Write function to get player choice using prompt//
    //If answer is not Rock, Paper or Scissors (case insensitive) return error and keep loop going//
    //If answer is valid update value and stop loop//
function getPlayerChoice() {
    let playerChoice = "";
    for (i = 0; i < 1; i) {
        let playerPrompt = prompt("Choose between Rock, Paper and Scissors", "").toLowerCase();
        if (playerPrompt == "rock" || playerPrompt == "paper" || playerPrompt == "scissors") {playerChoice = playerPrompt;
        i++}
        else {console.log("Please enter a valid input")}}
    return playerChoice}


//Play a round by calling both computer and player choice//
        //Make conditions for winning or losing game//
function playRound(player, computer) {
    if (player == computer) {return "This round is a tie! Computer also chose " + player.slice(0, 1).toUpperCase() + player.slice(1) + "!"}
    else if (player == "rock" && computer == "paper") {return "You lose a round! Computer chose Paper!"}
    else if (player == "rock" && computer == "scissors") {return "You win a round! Computer chose Scissors!"}
    else if (player =="paper" && computer == "rock") {return "You win a round! Computer chose Rock!"}
    else if (player =="paper" && computer == "scissors") {return "You lose a round! Computer chose Scissors!"}
    else if (player =="scissors" && computer == "rock") {return "You lose a round! Computer chose Rock!"}
    else {return "You win a round! Computer chose Paper!"}
}

//Play a best of 5 game//
function game() {
    console.log("This is a best of 5 game of Rock Paper Scissors")
    for (j = 0, k = 0 ; (j < 3) && (k < 3) ; j, k) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.slice(4, 5) == "w") {++j}
        else if (roundResult.slice(4, 5) == "l") {++k}
        else {};
        console.log(roundResult);
        if (j == 3) {console.log("You have won the game " + j + " to " + k + "! Refresh the page to play a new game.")}
        else if (k == 3) {console.log("Game over! Computer has won the game " + k + " to " + j + "! Refresh the page to play a new game.")}
        else if (j == k) {console.log("The game is tied " + j + " to " + k + "!")}
        else if (j > k) {console.log("You're leading the game " + j + " to " + k + "!")}
        else {console.log("Computer is leading the game " + k + " to " + j + "!")};
    }
}

//Run game//
game();