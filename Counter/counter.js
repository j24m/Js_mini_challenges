let incDecBtnAndCounterContainer = document.createElement("div");
incDecBtnAndCounterContainer.classList.add("incDecBtnAndCounterContainer");
let btnDecrementCount = document.createElement("button");
btnDecrementCount.classList.add(
  "btn-decrement",
  "btn",
  "btn-primary",
  "btn-floating"
);
btnDecrementCount.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z"/></svg>`;
let count = document.createElement("div");
count.classList.add("count");
count.innerHTML = `0`;
let btnIncrementCount = document.createElement("button");
btnIncrementCount.classList.add(
  "btn-decrement",
  "btn",
  "btn-primary",
  "btn-floating"
);
btnIncrementCount.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>`;
let containerForIncDecBy = document.createElement("div");
containerForIncDecBy.classList.add("containerForIncDecBy");
let textIncDecBy = document.createElement("div");
textIncDecBy.classList.add("text-inc-dec-by");
textIncDecBy.textContent = "Increment/Decrement by :";
let inputValueToIncDecBy = document.createElement("input");
inputValueToIncDecBy.classList.add("input-to-inc-dec-value-by");
inputValueToIncDecBy.setAttribute("type", "number");
inputValueToIncDecBy.setAttribute("min", "1");
inputValueToIncDecBy.value = 1;
containerForIncDecBy.appendChild(textIncDecBy);
containerForIncDecBy.appendChild(inputValueToIncDecBy);
let btnReset = document.createElement("button");
btnReset.classList.add("btn", "btn-primary", "btn-reset");
btnReset.innerText = "Reset";
let body = document.body;
body.classList.add("body");
incDecBtnAndCounterContainer.appendChild(btnDecrementCount);
incDecBtnAndCounterContainer.appendChild(count);
incDecBtnAndCounterContainer.appendChild(btnIncrementCount);
body.appendChild(incDecBtnAndCounterContainer);
body.appendChild(containerForIncDecBy);
body.appendChild(btnReset);

let currentCount = Number(count.innerHTML);
console.log(typeof currentCount, currentCount);

btnDecrementCount.addEventListener("click", decrementCount);
function decrementCount() {
  let valueToIncDecCounter = Number(inputValueToIncDecBy.value);
  currentCount = currentCount - valueToIncDecCounter;
  count.innerHTML = `${currentCount}`;
  console.log(count.innerHTML);
}

btnIncrementCount.addEventListener("click", incrementCount);
function incrementCount() {
  let valueToIncDecCounter = Number(inputValueToIncDecBy.value);
  currentCount = currentCount + valueToIncDecCounter;
  count.innerHTML = `${currentCount}`;
  console.log(count.innerHTML);
}

btnReset.addEventListener("click", resetCounter);
function resetCounter() {
  count.innerHTML = `0`;
  currentCount = Number(count.innerHTML);
  inputValueToIncDecBy.value = 1;
}
