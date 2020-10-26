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
  console.log(number);
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
