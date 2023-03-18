const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = Math.floor(Math.random() * choices.length);
    console.log(choices[choice]);
}

getComputerChoice();