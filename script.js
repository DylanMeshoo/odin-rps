const choices = ['rock', 'paper', 'scissors'];
const choice = Math.floor(Math.random() * choices.length);

let playerChoice = prompt("What is your choice? (Rock, Paper, Scissors)").toUpperCase();
let computerChoice = choices[choice].toUpperCase();

function playRound(playerSelection, computerSelection) {
    console.log(`You drew ${playerSelection}`);
    console.log(`The computer drew ${computerSelection}`);
    if (playerSelection == "ROCK") {
        if (computerChoice == "ROCK") {
            console.log('It\'s a draw!');
        } else if (computerChoice == "PAPER") {
            console.log('You lose!');
        } else if (computerChoice == "SCISSORS") {
            console.log('You win!!');
        }
    }

    if (playerSelection == "PAPER") {
        if (computerChoice == "PAPER") {
            console.log("It's a draw!");
        } else if (computerChoice == "ROCK") {
            console.log("You win!");
        } else if (computerChoice == "SCISSORS") {
            console.log("You lose!");
        }
    }

    if (playerSelection == "SCISSORS") {
        if (computerChoice == "SCISSORS") {
            console.log("It's a draw!");
        } else if (computerChoice == "PAPER") {
            console.log("You win!");
        } else if (computerChoice == "ROCK") {
            console.log("You lose!");
        }
    }
}

function game() {
    playRound(playerChoice, computerChoice);
}

game();