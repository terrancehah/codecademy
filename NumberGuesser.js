let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.round (Math.random () * 10);

const compareGuesses = (humanGuess, comGuess, target) => {
  let generateTarget = target;
  let humanGuessDiff = Math.abs(humanGuess - target);
  let comGuessDiff = Math.abs(comGuess - target);
  if (humanGuessDiff < comGuessDiff) {return true} 
    else if (humanGuessDiff > comGuessDiff) {return false}
    else {return true} 
}

const updateScore = winner => {
  if (winner === 'human') {
  humanScore += 1;
  } else { 
  computerScore += 1;
  }
}

let advanceRound = () => currentRoundNumber += 1;