# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
# we can see that the 6th prime is 13.
# What is the nth prime number?

# @param {Integer} n
# @return {Integer}
def nth_prime(n)
  prime_counter = 0
  current_prime = 1
  current_number = 1

  until prime_counter == n
    if prime?(current_number)
      prime_counter += 1
      current_prime = current_number
    end
    current_number += 1
  end

  current_prime
end

def prime?(num)
  return if num <= 1

  (2..Math.sqrt(num)).none? { |i| (num % i).zero? }
end

puts nth_prime(6) # 13
puts nth_prime(10) # 13
puts nth_prime(100) # 29
puts nth_prime(1000) # 7919
puts nth_prime(10_001) # 104743
