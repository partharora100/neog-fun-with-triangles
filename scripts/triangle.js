"use strict";

const inputFields = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
// console.log(inputFields);

const showMessage = function (msg) {
  message.textContent = msg;
};

const isTriangle = function () {
  showMessage("");
  const angle1 = Number(inputFields[0].value);
  const angle2 = Number(inputFields[1].value);
  const angle3 = Number(inputFields[2].value);

  if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
    if (angle1 + angle2 + angle3 === 180) {
      showMessage("The following angles form a Triangle");
    } else {
      showMessage("The following angles do not form a triangle ❌");
    }
  } else {
    showMessage("Please enter valid angles (angle > 0)");
  }
};

button.addEventListener("click", isTriangle);
