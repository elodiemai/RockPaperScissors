const numberOfRounds = 3;
game(numberOfRounds);

//launches the game
function game (numberOfRounds) {
    for (let i=1; i <= numberOfRounds; i++) {
        let playChoice = prompt('Please type ROCK, PAPER or SCISSORS (case insensitive):',"").toUpperCase();
            if(['PAPER','ROCK','SCISSOR'].indexOf(playChoice) < 0)  {
                console.log('Invalid input, please try again.');
                i--;
            } else {
                const compChoice = getComputerChoice();
                console.log(playRoundGame(playChoice, compChoice));
            };
    }
}

//lets the computer choose between Rock Paper or Scissors
function getComputerChoice() {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    return choiceArray[Math.floor(Math.random() * 3)];
}

//plays one round of Rock Paper Scissors
function playRoundGame(playerSelection, computerSelection) {
    const playerSelectionUpper = playerSelection.toUpperCase();
    const compSelectionUpper = computerSelection.toUpperCase();
    if (
        (playerSelectionUpper === 'PAPER' && compSelectionUpper === 'ROCK')
        || (playerSelectionUpper === 'ROCK' && compSelectionUpper === 'SCISSORS')
        || (playerSelectionUpper === 'SCISSORS' && compSelectionUpper === 'PAPER')
    ) {
        return `You Win! ${playerSelectionUpper} beats ${compSelectionUpper}.`;
    } else if (
        (playerSelectionUpper === 'PAPER' && compSelectionUpper === 'SCISSORS')
        || (playerSelectionUpper === 'ROCK' && compSelectionUpper === 'PAPER')
        || (playerSelectionUpper === 'SCISSORS' && compSelectionUpper === 'ROCK')
    ) {
        return `You Lose ... ${compSelectionUpper} beats ${playerSelectionUpper}.`;
    } else if (playerSelectionUpper === compSelectionUpper) {
        return `You both chose ${playerSelectionUpper}. It's a tie.`;
    } else {
        return 'Error: Invalid inputs.';
    }
}

