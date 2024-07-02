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

function playRound () {
    choiceNum = getRandoIntInclusive(1,3);
    console.log(choiceNum);
    computerChoice = getComputerChoice(choiceNum)
    console.log(computerChoice);
    humanChoice = getHumanChoice();
    console.log(humanChoice);

    

    if (humanChoice === 'rock') {
        console.log('You played rock');
        if (computerChoice === 'rock') {
            return "Tie! Rock ties rock.";
        } else if (computerChoice === 'paper') {
            return "You Lose! Paper beats rock.";
        } else if (computerChoice === 'scissors') {
            return "You win! Rock beats scissors."
        } else {
            return "Invalid entry."
        }
    }
}