function solve(start, end, divisor) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      count++;
    }
  }
  return count;
}

module.exports = solve