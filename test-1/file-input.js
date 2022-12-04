const fs = require('fs');

const solve = require('./solve');
const data = fs.readFileSync('test-1/input.txt', 'utf8').trim().split('\n');

const numTestCases = Number(data[0]);

const results = [];

for (let i = 1; i <= numTestCases; i++) {
  const start = Number(data[i * 3 - 2]);
  const end = Number(data[i * 3 - 1]);
  const divisor = Number(data[i * 3]);

  results.push(`Case ${i}: ${solve(start, end, divisor)}`);
}

fs.writeFileSync('test-1/output.txt', results.join('\n'));
