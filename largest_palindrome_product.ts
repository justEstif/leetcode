function largestPalindromeProduct(n: number): number {
  const max = parseInt("9".repeat(n));
  const min = (max + 1) / 10;
  let largest = -1;

  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      const num = i * j;
      const numReverse = parseInt(num.toString().split("").reverse().join(""));

      if (num === numReverse) {
        largest = Math.max(num, largest);
        break;
      }
    }
  }

  return largest;
}

// Example usage:
const n = 3;
const result = largestPalindromeProduct(n);
console.log(result);
