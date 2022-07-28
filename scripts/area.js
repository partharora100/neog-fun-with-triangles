"use strict";

const baseEl = document.querySelector(".input-base");
const heightEl = document.querySelector(".input-height");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

function showMessage(msg) {
  message.textContent = msg;
}

function calculateArea() {
  const base = Number(baseEl.value);
  const height = Number(heightEl.value);

  if (baseEl.value && heightEl.value && base > 0 && height > 0) {
    const area = (1 / 2) * (base * height);
    console.log(area);
    showMessage(`The area of triangle is ${area}`);
    return area;
  } else {
    showMessage(`Please enter valid values`);
  }
}

button.addEventListener("click", calculateArea);
