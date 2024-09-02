// Variables to store game data
let max_Num = 20;
let min_num = 1;
let randomNumber = Math.floor(
  Math.random() * (max_Num - min_num + 1) + min_num
);
let score = 20;
let highscore = 0;


function checkUserInput(userInput) {
  userInput = Number(userInput);
  if (isNaN(userInput) || userInput > 20 || userInput < 1) {
    document.querySelector('.message').textContent =
      'Please enter a valid number between 1 and 20';
    return false;
  }
  return true;
}

function compareNumber() {
  let userInput = Number(document.getElementById('guess').value);
  let timeout=5000
  if (userInput === randomNumber) {
    document.getElementById('bg').style.backgroundColor = 'green';
    document.querySelector('.message').textContent =
      'Congratulations, you guessed the correct number!';

    setTimeout(() => {
        reset()
    }, timeout);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    document.getElementById('bg').style.backgroundColor = 'red';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent =
      userInput < randomNumber ? 'Too low!' : 'Too high!';
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Game over! Try again.';
      document.getElementById('guess').disabled = true;
    }
  }
  document.getElementById('guess').value = '';

}

// Event listeners
document.querySelector('.btn_check').addEventListener('click', function () {
  let userInput = document.getElementById('guess').value;
  if (checkUserInput(userInput)) {
    compareNumber();
  }
});
function reset() {
  score = 20;
  randomNumber = Math.floor(Math.random() * (max_Num - min_num + 1) + min_num);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.getElementById('bg').style.backgroundColor = '';
  document.querySelector('.number').textContent = '?';
  document.getElementById('guess').value = '';
  console.log(randomNumber);
  document.getElementById('guess').disabled = false;

}
document.querySelector('.btn.again').addEventListener('click', reset );
