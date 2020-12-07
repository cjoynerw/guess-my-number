'use strict';

// Secret secretNumber generator
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Brings in value of user guess after clicking check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number!';

    // When the user gets the number correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'That is correct!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    // When the number guessed is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost, reset and try again!';
      document.querySelector('.score').textContent = 0;
    }

    // When the number guessed is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost, reset and try again!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
