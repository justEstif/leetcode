# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the given number?

# @param {Integer} number
# @return {Integer}
def largest_prime_factor(number)
  tmp = number
  largest_prime = 2
  (tmp % largest_prime).zero? ? (tmp /= largest_prime) : (largest_prime += 1) while tmp > 1
  largest_prime
end

# Test cases
puts largest_prime_factor(2) # Should print: 2
puts largest_prime_factor(3) # Should print: 3
puts largest_prime_factor(5) # Should print: 5
puts largest_prime_factor(7) # Should print: 7
puts largest_prime_factor(8) # Should print: 2
puts largest_prime_factor(13_195) # Should print: 29
puts largest_prime_factor(600_851_475_143) # Should print: 6857
