function getComputerChoice() {
    let choice = Math.random()
    if (choice < 0.33) {
        return 'rock'
    } else if (choice > 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let choice = prompt('What is your choice?', )
    return choice
}

humanScore = 0
computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice == 'rock') && (computerChoice == 'scissors')) {
        console.log('Your choice is rock');
        console.log('computer choice is scissors');
        console.log('You win! Rock beats scissors!');
        humanScore = (humanScore + 1);
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    } else if ((humanChoice == 'scissors') && (computerChoice == 'paper')) {
        console.log('Your choice is scissors');
        console.log('computer choice is paper');
        console.log('You win! Scissors beats paper!');
        humanScore = (humanScore + 1);
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    } else if ((humanChoice == 'paper') && (computerChoice == 'rock')) {
        console.log('Your choice is paper');
        console.log('computer choice is rock');
        console.log('You win! Paper beats rock!');
        humanScore = (humanScore + 1);
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    } else if ((humanChoice == 'rock') && (computerChoice == 'paper')) {
        console.log('Your choice is rock');
        console.log('computer choice is paper')
        console.log('You lose! Paper beats rock!');
        computerScore = (computerScore + 1);
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    } else if ((humanChoice == 'paper') && (computerChoice == 'scissors')) {
        console.log('Your choice is paper');
        console.log('computer choice is scissors')
        console.log('You lose! Scissors beats paper!');
        computerScore = (computerScore + 1);
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    } else if ((humanChoice == 'scissors') && (computerChoice == 'rock')) {
        console.log('Your choice is scissors');
        console.log('computer choice is rock')
        console.log('You lose! Rock beats scissors!');
        computerScore = (computerScore + 1);
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    } else if ((humanChoice === 'rock') && (computerChoice === 'rock')) {
        console.log('Your choice is rock');
        console.log('computer choice is rock')
        console.log('Its a draw!');
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    } else if ((humanChoice === 'paper') && (computerChoice === 'paper')) {
        console.log('Your choice is paper');
        console.log('computer choice is paper')
        console.log('Its a draw!');
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    } else {
        console.log('Your choice is scissors');
        console.log('computer choice is scissors')
        console.log('Its a draw!');
        console.log('The scores are \nHuman Score: ' + humanScore + '\nComputer Score: ' + computerScore)
    }
}

const rockButton = document.querySelector('.rock');
const scissorsButton = document.querySelector('.scissors');
const paperButton = document.querySelector('.paper');
const humanResults = document.querySelector('.human-results');
const computerResults = document.querySelector('.computer-results');
const resultsLog = document.querySelector('.results-log');

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    if (humanScore === 5) {
           humanResults.textContent = 'Human wins!';
           resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    } else if (computerScore === 5) {
        computerResults.textContent = 'Computer wins!';
        resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    } else {
    resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    }
})
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    if (humanScore === 5) {
           humanResults.textContent = 'Human wins!';
           resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    } else if (computerScore === 5) {
        computerResults.textContent = 'Computer wins!';
        resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    } else {
    resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    }
})
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    if (humanScore === 5) {
           humanResults.textContent = 'Human wins!';
           resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    } else if (computerScore === 5) {
        computerResults.textContent = 'Computer wins!';
        resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    } else {
    resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    }
})