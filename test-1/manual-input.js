const prompt = require("prompt-sync")();

const solve = require('./solve');

// Get the number of test cases from the user
const numTestCases = Number(prompt('Enter the number of test cases:'));

// Loop through each test case
for (let i = 1; i <= numTestCases; i++) {
  // Get the input numbers for the test case from the user
  const start = Number(prompt('Enter Start:'));
  const end = Number(prompt('Enter End:'));
  const divisor = Number(prompt('Enter Divisor:'));

  // Solve the test case and output the result
  console.log(`Case ${i}: ${solve(start, end, divisor)}`);
}