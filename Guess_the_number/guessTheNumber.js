let userInput = document.querySelector(".input");
let BtnSubmit = document.querySelector(".btn-submit");
let BtnStartGame = document.querySelector(".btn-start-game");
let guessResult = document.querySelector(".guess-result");
let guesses = document.querySelector(".guesses");
let guessArray = [];
let randomNumber = Math.floor(Math.random() * 101);
BtnSubmit.disabled = false;
BtnStartGame.disabled = true;
guesses.style.display = "none";
guesses.textContent = `Guesses :`;

BtnSubmit.addEventListener("click", guessHandler);
function guessHandler() {
  userInput.focus();
  let userGuess = Number(userInput.value);
  console.log("randomNumber", randomNumber);
  console.log("userGuess", userGuess);
  guesses.style.display = "flex";
  guesses.textContent += ` ${userGuess},`;
  userInput.value = "";

  if (userGuess > randomNumber) {
    guessResult.textContent = "Too high, please try again.";
    guessResult.style.color = "red";
  } else if (userGuess < randomNumber) {
    guessResult.textContent = "Too low, please try again.";
    guessResult.style.color = "orange";
  } else if (userGuess === randomNumber) {
    guessResult.textContent = "Congrats! you guessed it right.";
    guessResult.style.color = "green";
    BtnSubmit.disabled = true;
    userInput.disabled = true;
    BtnStartGame.disabled = false;
    return;
  }
  guessArray.push(userGuess);
  if (guessArray.length === 10) {
    guessResult.textContent = `You lost! The number was ${randomNumber}.`;
    BtnSubmit.disabled = true;
    BtnStartGame.disabled = false;
    userInput.disabled = true;
  }
  console.log("guessArray", guessArray);
}

BtnStartGame.addEventListener("click", resetGame);
function resetGame() {
  userInput.disabled = false;
  BtnStartGame.disabled = true;
  BtnSubmit.disabled = false;
  guesses.textContent = "";
  guessResult.textContent = "";
  guessArray = [];
}
