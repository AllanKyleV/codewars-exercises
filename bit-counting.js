// Convert number to bit representation, and count the 1s
var countBits = function(n) {
  let bits = [];
  let count = 0;

  while (n > 0) {
    let quotient = Math.floor(n / 2);
    bits.push(n % 2);
    n = quotient;
  }

  for (let bit of bits) {
    if (bit === 1) count++;
  }

  return count;
}

// Test
console.log(countBits(25))
