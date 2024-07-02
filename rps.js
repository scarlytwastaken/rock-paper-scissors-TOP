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
    humanChoice = getHumanChoice();
    console.log(`You played: ${humanChoice}.`);
    choiceNum = getRandoIntInclusive(1,3);
    //console.log(choiceNum);
    computerChoice = getComputerChoice(choiceNum)
    console.log(`The opponent plays: ${computerChoice}.`);
        

    if (humanChoice === 'rock') {
        //console.log('You played rock.');
        if (computerChoice === 'rock') {
            return "Tie! Rock ties rock.";
        } else if (computerChoice === 'paper') {
            return "You Lose! Rock is defeated by paper.";
        } else if (computerChoice === 'scissors') {
            return "You win! Rock beats scissors."
        } else {
            return "Error: computer choice."
        }
    } else if (humanChoice === 'paper') {
        //console.log('You played paper.');
        if (computerChoice === 'rock') {
            return "You win! Paper beats rock.";
        } else if (computerChoice === 'paper') {
            return "Tie! Paper ties paper.";
        } else if (computerChoice === 'scissors') {
            return "You lose! Paper is defeated by scissors."
        } else {
            return "Error: computer choice."
        }
    } else if (humanChoice === 'scissors') {
        //console.log('You played scissors.');
        if (computerChoice === 'rock') {
            return "You lose! Scissors is defeated by rock.";
        } else if (computerChoice === 'paper') {
            return "You win! Scissors beats paper.";
        } else if (computerChoice === 'scissors') {
            return "Tie! Scissors ties scissors."
        } else {
            return "Error: computer choice."
        }
    } else {
        return 'Your choice is not valid';
    }   
}