const rock = document.getElementById('option-rock');
const paper = document.getElementById('option-paper');
const scissors = document.getElementById('option-scissors');

let choices = ['ROCK', 'PAPER', 'SCISSORS'];

let playerChoice = 0;


function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomChoice];
    console.log(computerChoice);
}

rock.addEventListener('click', () => {
    getComputerChoice();
    playerChoice = 'ROCK';
    if (playerChoice == "ROCK") {
        if (computerChoice == "ROCK") {
          console.log("It's a draw!");
        } else if (computerChoice == "PAPER") {
          console.log("You lose!");
        } else if (computerChoice == "SCISSORS") {
          console.log("You win!");
        }
      }
});

paper.addEventListener('click', () => {
    getComputerChoice();
    playerChoice = 'PAPER';
    if (playerChoice == "PAPER") {
        if (computerChoice == "PAPER") {
          console.log("It's a draw!");
        } else if (computerChoice == "ROCK") {
          console.log("You win!");
        } else if (computerChoice == "SCISSORS") {
          console.log("You lose!");
        }
      }
      
});

scissors.addEventListener('click', () => {
    getComputerChoice();
    playerChoice = 'SCISSORS';
    if (playerChoice == "SCISSORS") {
        if (computerChoice == "SCISSORS") {
          console.log("It's a draw!");
        } else if (computerChoice == "PAPER") {
          console.log("You win!");
        } else if (computerChoice == "ROCK") {
          console.log("You lose!");
        }
      }
});