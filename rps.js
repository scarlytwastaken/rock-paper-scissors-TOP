function getRandoIntInclusive(min, max) {
    const minCiel = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCiel + 1) + minCiel);
}

function getComputerChoice(choiceNum) {
    if (choiceNum === 1) {
        return 'rock';
    } else if (choiceNum === 2) {
        return 'paper';
    } else if (choiceNum === 3) {
        return 'scissors';
    } else return 'ERRORRRRR';
}

function getHumanChoice () {
    return prompt('Enter: rock, paper, or scissors.');
}

humanScore = 0

computerScore = 0

function writeScore () {
    console.log(`You have: ${humanScore} points, your opponent has ${computerScore} points.`)
}

function playRound () {
    humanChoice = getHumanChoice();
    console.log(`You played: ${humanChoice}.`);
    choiceNum = getRandoIntInclusive(1,3);
    //console.log(choiceNum);
    computerChoice = getComputerChoice(choiceNum)
    console.log(`The opponent plays: ${computerChoice}.`);
       

    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log("Tie! Rock ties rock.");
            return writeScore();
        } else if (computerChoice === 'paper') {
            console.log("You Lose! Rock is defeated by paper.");
            computerScore++;
            return writeScore();
        } else if (computerChoice === 'scissors') {
            console.log("You win! Rock beats scissors.");
            humanScore++
            return writeScore();
        } else {
            return "Error: computer choice."
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log("You win! Paper beats rock.");
            humanScore++
            return writeScore();
        } else if (computerChoice === 'paper') {
            console.log("Tie! Paper ties paper.");
            return writeScore();
        } else if (computerChoice === 'scissors') {
            console.log("You lose! Paper is defeated by scissors.");
            computerScore++
            return writeScore();
        } else {
            return "Error: computer choice."
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log("You lose! Scissors is defeated by rock.");
            computerScore++
            return writeScore();
        } else if (computerChoice === 'paper') {
            console.log("You win! Scissors beats paper.");
            humanScore++
            return writeScore();
        } else if (computerChoice === 'scissors') {
            console.log("Tie! Scissors ties scissors.");
            return writeScore();
        } else {
            return "Error: computer choice."
        }
    } else {
        return 'Your choice is not valid';
    }
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > 2) {
        console.log(`You won the game! POGGERS!`);
    } else if (computerScore > 2) {
        console.log(`You lost the game! PIEN!`);
    } else (console.log('ERRRORRRRRRR'));
    
}