// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

const largestPrimeFactor = (root: number): number => {
  let prime_number = 2;
  while (root > 1) {
    !(root % prime_number) ? root /= prime_number : prime_number++;
  }
  return prime_number;
};

// # Test cases
console.log(largestPrimeFactor(2)); // Should print: 2
console.log(largestPrimeFactor(3)); // Should print: 3
console.log(largestPrimeFactor(5)); // Should print: 5
console.log(largestPrimeFactor(7)); // Should print: 7
console.log(largestPrimeFactor(8)); // Should print: 2
console.log(largestPrimeFactor(13_195)); // Should print: 29
console.log(largestPrimeFactor(600851475143)); // Should print: 6857
