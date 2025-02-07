// Generate a random number between 1 and 100
let randomNumber = Math.ceil(Math.random() * 100);
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const resultDisplay = document.getElementById("result");
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultDisplay.textContent =
      "Please enter a valid number between 1 and 100.";
    return;
  }

  if (userGuess === randomNumber) {
    resultDisplay.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
  } else if (userGuess > randomNumber) {
    resultDisplay.textContent = "You entered a high number! Give it another go.";
  } else {
    resultDisplay.textContent = "You entered a low number! Give it another go.";
  }
}

// Function to reset the game
function resetGame() {
  randomNumber = Math.ceil(Math.random() * 100);
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("result").textContent = "Awaiting your guess...";
}
