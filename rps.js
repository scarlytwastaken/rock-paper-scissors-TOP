function getRandoIntInclusive(min, max) {
    const minCiel = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCiel + 1) + minCiel);
}

choiceNum = getRandoIntInclusive(1,3);

console.log(choiceNum);

function getComputerChoice(choiceNum) {
    if (choiceNum === 1) {
        console.log('rock');
    } else if (choiceNum === 2) {
        console.log('paper');
    } else if (choiceNum === 3) {
        console.log('scissors');
    } else console.log('ERRORRRRR');
}

console.log(getComputerChoice(choiceNum));