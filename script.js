const choices = ['rock', 'paper', 'scissors'];
const choice = Math.floor(Math.random() * choices.length);

let playerChoice = prompt("What is your choice? (Rock, Paper, Scissors)").toUpperCase();
let computerChoice = choices[choice];

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
}

playRound(playerChoice, computerChoice)
getComputerChoice();