const getUserChoice = function(userInput) 
{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput === 'bomb') {
return userInput;
} else {
  console.log('Please key in either rock, paper or scissors.')
}
}

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return 'rock';
  if (randomNumber === 1) return 'paper';
  if (randomNumber === 2) return 'scissors';
};

const determineWinner = function(userChoice,computerChoice) {
  if (userChoice === computerChoice) { return `It's a tie.` }
  if (userChoice === 'rock' && computerChoice === 'paper') { return 'The computer won.' }
  if (userChoice ==='scissors' && computerChoice === 'rock') { return 'The computer won.' }
  if (userChoice === 'paper' && computerChoice === 'scissors') { return 'The computer win.' } 
  if (userChoice === 'bomb') {return 'You won by cheating, asshole.'} 
  else { return 'You won.'}
}

const playGame = function() {
 const userChoice = getUserChoice('bomb');
 const computerChoice = getComputerChoice();
 console.log(`You picked ${userChoice}, the computer has picked ${computerChoice}.`);
 console.log(determineWinner(userChoice,computerChoice));
}

playGame();