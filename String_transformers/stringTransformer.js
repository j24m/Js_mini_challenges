let userInput = document.querySelector(".input");
let lowerCaseEl = document.querySelector("#lowercase");
let upperCaseEl = document.querySelector("#uppercase");
userInput.addEventListener("input", transform);
function transform() {
  let text = userInput.value;
  lowerCaseEl.textContent = text.toLowerCase();
  upperCaseEl.textContent = text.toUpperCase();
}
