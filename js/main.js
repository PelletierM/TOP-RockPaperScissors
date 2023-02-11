function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice = ""
    if (randomNumber == 1) {computerChoice = "rock"} 
        else if (randomNumber == 2) {computerChoice = "paper"}
        else {computerChoice = "scissors"}
    return computerChoice
}

function playRound(player, computer) {
    if (player == computer) {return "This round is a tie! Computer also chose " + player.slice(0, 1).toUpperCase() + player.slice(1) + "!"}
    else if (player == "rock" && computer == "paper") {return "You lose a round! Computer chose Paper!"}
    else if (player == "rock" && computer == "scissors") {return "You win a round! Computer chose Scissors!"}
    else if (player =="paper" && computer == "rock") {return "You win a round! Computer chose Rock!"}
    else if (player =="paper" && computer == "scissors") {return "You lose a round! Computer chose Scissors!"}
    else if (player =="scissors" && computer == "rock") {return "You lose a round! Computer chose Rock!"}
    else {return "You win a round! Computer chose Paper!"}
}

const roundResultDefault = document.querySelector(".roundResult").innerHTML;
let roundResult = document.querySelector(".roundResult")
let computerCount = 0;
let playerCount = 0;

// offsetWidth is a reload trick to trigger class change, 
// investigate here if transition reset is not working
function roundResultAnimReset() {
    roundResult.classList.remove("change");
    roundResult.offsetWidth;
    roundResult.classList.add("change");
}

function updateCounter(result) {
    if (result.slice(4, 5) == "w") {++playerCount}
    else if (result.slice(4, 5) == "l") {++computerCount} 
    else {};
    
    let playerUpdate = document.querySelector(".p" + playerCount)
    if (playerUpdate != null) {playerUpdate.classList.add("active")}
    else {};

    let computerUpdate = document.querySelector(".c" + computerCount)
    if (computerUpdate != null) {computerUpdate.classList.add("active")}
    else {};
}

// This function adjusts the first parameter of playRound based on
// the button's innterHTML so that there is no need to call and 
// adjust it manually for each button
function clickEvent(e) {
    if (computerCount === 5 || playerCount === 5) {}
    else {let result = playRound(e.target.innerHTML.toLowerCase(), getComputerChoice());
        updateCounter(result);
        if (computerCount === 5) {roundResult.textContent="Game Over, Computer won.";
        roundResultAnimReset();}
        else if (playerCount === 5) {roundResult.textContent="You win the game!"
        roundResultAnimReset()}
        else {roundResult.textContent=result;
        roundResultAnimReset()}
    }
}

// This allows to addEventListener for all buttons with same class
// so that there is no need to write one for every single button
let choiceButtons = document.querySelectorAll(".choiceButton");
choiceButtons.forEach(function(choiceButton) {
    choiceButton.addEventListener("click", function(e) {clickEvent(e);})})

let reset = document.querySelector(".resetButton");
reset.addEventListener("click", function(e) {
    let counters = document.querySelectorAll(".counter");
    counters.forEach(function(counter) {
    counter.classList.remove("active")})
    computerCount = 0;
    playerCount = 0;
    roundResult.textContent=roundResultDefault;
    roundResultAnimReset();
    }
)