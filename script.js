'use strict';

// Secret number generator
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

// Brings in value of user guess after clicking check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number!';
  }
});
