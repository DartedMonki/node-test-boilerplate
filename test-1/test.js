const assert = require('assert');

const solve = require('./solve');

function test(solve) {
  assert.strictEqual(solve(1, 10, 3), 3);
  assert.strictEqual(solve(8, 20, 4), 4);

  console.log('All tests passed!');
}

test(solve);