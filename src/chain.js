// Challenge: Chaining Methods
// Requirements
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

function sortAscending(a, b) {
  return b - a;
}

function lessThan19(a) {
  return a <= 19;
}

function multSubtract(a) {
  return a * 1.5 - 1;
}

const sumNums = (accumulator, currentValue) => accumulator + currentValue;

let chained = integers
  .sort(sortAscending)
  .filter(lessThan19)
  .map(multSubtract)
  .reduce(sumNums);

const outputDiv = document.getElementById("output");
let outputText = document.createElement("h1");
outputDiv.setAttribute("class", "chainedHuge");
outputText.textContent = chained;

outputDiv.appendChild(outputText);

console.log(chained);
