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
const paperImage = document.createElement('img');
const rockImage = document.createElement('img');
const scissorsImage = document.createElement('img');
const imageChoice = document.querySelector('.image-choice');
const animalImage = document.querySelector("#human-rps");
const computerImage = document.querySelector('#computer-rps');
const humanText = document.querySelector('#human-text');
const computerText = document.querySelector('#computer-text')


function showHumanImage(event) {
    if (event.target == rockButton) {
        animalImage.src = "./images/rock.png"
    } if (event.target == paperButton) {
        animalImage.src = "./images/paper.png"
    } if (event.target == scissorsButton) {
        animalImage.src = "./images/scissors.png"
    }
  }

function showComputerImage(computerChoice) {
    if (computerChoice === 'rock') {
        computerImage.src = './images/rock.png';
    } else if (computerChoice === 'paper') {
        computerImage.src = './images/paper.png';
    } else if (computerChoice === 'scissors') {
        computerImage.src = './images/scissors.png';
    }
}

rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
    humanText.textContent = 'Your Choice:';
    computerText.textContent = 'Computer Choice:';
    showHumanImage(event);
    showComputerImage(computerChoice);
    resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    if (humanScore === 5) {
        humanResults.textContent = 'Human wins!';
    } else if (computerScore === 5) {
        computerResults.textContent = 'Computer wins!';
    }
})
scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
    humanText.textContent = 'Your Choice:';
    computerText.textContent = 'Computer Choice:';
    showHumanImage(event);
    showComputerImage(computerChoice);
    resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    if (humanScore === 5) {
        humanResults.textContent = 'Human wins!';
    } else if (computerScore === 5) {
        computerResults.textContent = 'Computer wins!';
    }
})

paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
    humanText.textContent = 'Your Choice:';
    computerText.textContent = 'Computer Choice:';
    showHumanImage(event);
    showComputerImage(computerChoice);
    resultsLog.textContent = 'Human Score is: ' + humanScore + '. Computer Score is: ' + computerScore;
    if (humanScore === 5) {
        humanResults.textContent = 'Human wins!';
    } else if (computerScore === 5) {
        computerResults.textContent = 'Computer wins!';
    }
})