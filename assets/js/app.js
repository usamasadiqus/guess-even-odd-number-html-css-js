// Get the necessary DOM elements
const input1 = document.getElementById("input1"); // Input element 1
const input2 = document.getElementById("input2"); // Input element 2
const addButton = document.querySelector(".add-button"); // Add button
const resultElement = document.getElementById("result"); // Result element

// Function to guess if the result is an even or odd number
function guessEvenOddNumber() {
  // Get the values from the input fields and convert them to numbers
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  // Perform the modulo operation to check if value1 is divisible by value2
  let output;

  if (value1 % value2 === 0) {
    output = "The result is an even number.";
  } else {
    output = "The result is an odd number.";
  }

  // Update the result element with the output message
  resultElement.textContent = output;
}

// Add event listener to the add button
addButton.addEventListener("click", guessEvenOddNumber);
