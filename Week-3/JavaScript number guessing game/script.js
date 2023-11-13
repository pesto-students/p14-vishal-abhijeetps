// Your solution goes here
const playGuessingGame = (number, maxTries = 10) => {
  let tries = 1;
  let guess = prompt('Enter a number between 1 and 100.').trim();
  while (tries < maxTries) {
    if (guess === null) {
      tries = 0;
      break;
    }
    if (isNaN(guess) || guess === '') {
      guess = prompt('Please enter a number.').trim();
    } else {
      if (+guess === number) {
        break;
      } else if (+guess > number) {
        tries = tries + 1;
        guess = prompt(
          `${guess} is too large. Guess a smaller number.`,
          guess
        ).trim();
      } else if (+guess < number) {
        tries = tries + 1;
        guess = prompt(
          `${guess} is too small. Guess a larger number.`,
          guess
        ).trim();
      }
    }
  }
  if (tries === maxTries) {
    tries = 0;
  }
  return tries;
};
