"use strict";

let vendingMachine = document.querySelector(".vending-machine");
let total = document.querySelector(".total");
let cost = 0;
total.innerText = `$${cost.toFixed(2)}`;

let purchaseButtons = document.querySelectorAll(".purchase-button");
purchaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let price = parseFloat(button.getAttribute("data-price"));
    cost += price;
    total.innerText = `$${cost.toFixed(2)}`;
  });
});

let moneyContainer = document.querySelector(".money-container");

moneyContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(moneyContainer);
  let coin = formData.get("coin");
  let number = formData.get("amount");
  for (let i = 1; i <= number; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "coin-shape");
    newDiv.innerText = `${coin}`;
    newDiv.addEventListener("click", () => {
      newDiv.remove();
    });
    moneyContainer.append(newDiv);
  }
  moneyContainer.reset();
});

let lightBulb = document.querySelector(".light-bulb");
console.dir(lightBulb);

let onButton = document.querySelector(".on");
const bulbOn = () => {
  lightBulb.classList.add("light");
};
onButton.addEventListener("click", bulbOn);

let offButton = document.querySelector(".off");

const bulbOff = () => {
  lightBulb.classList.remove("light");
};
offButton.addEventListener("click", bulbOff);

let toggle = document.querySelector(".toggle");
const toggleBulb = () => {
  lightBulb.classList.toggle("light");
};

toggle.addEventListener("click", toggleBulb);

let end = document.querySelector(".end");

end.addEventListener("click", () => {
  lightBulb.remove();
  onButton.removeEventListener("click", bulbOn);
  onButton.disabled = true;
  offButton.removeEventListener("click", bulbOff);
  offButton.disabled = true;
  toggle.removeEventListener("click", toggleBulb);
  toggle.disabled = true;
  end.disabled = true;
});
