"use strict";

const baseEl = document.querySelector(".input-base");
const heightEl = document.querySelector(".input-height");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

function showMessage(msg) {
  message.textContent = msg;
}

function calculateHypo() {
  const base = Number(baseEl.value);
  const height = Number(heightEl.value);

  if (baseEl.value && heightEl.value && base > 0 && height > 0) {
    const hypotenuse = Math.sqrt(base * base + height * height);
    showMessage(`The hypotenuse of the triangle is ${hypotenuse} units`);
    return hypotenuse;
  } else {
    showMessage(`Please enter valid values as entries`);
  }
}

button.addEventListener("click", calculateHypo);
