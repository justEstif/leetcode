# The sum of the squares of the first ten natural numbers is,
# 12 + 22 + ... + 102 = 385

# The square of the sum of the first ten natural numbers is,
# (1 + 2 + ... + 10)2 = 552 = 3025

# Hence the difference between the sum of the squares of the
# first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

# Find the difference between the sum of the squares of the first n natural
# numbers and the square of the sum

def sum_of_squares(n)
  n * (n + 1) * (2 * n + 1) * 1 / 6
end

def square_of_sums(n)
  (n * (n + 1) / 2)**2
end

def sum_square_difference(n)
  square_of_sums(n) - sum_of_squares(n)
end

puts sum_square_difference(10) # 2640
