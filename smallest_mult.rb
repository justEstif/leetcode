# What is the smallest positive number that is
# evenly divisble by all the number from 1 to `n`?

# @param {Integer}n
# @return {Integer}
def smallest_mult(n)
  prime_factors_count = Hash.new(0)

  (2..n).each do |i|
    factors = prime_factors(i)
    factors_count = Hash.new(0)

    factors.each do |factor|
      factors_count[factor] += 1
    end

    factors_count.each do |factor, count|
      prime_factors_count[factor] = [prime_factors_count[factor], count].max
    end
  end

  result = 1
  prime_factors_count.each do |factor, count|
    result *= factor**count
  end

  result
end

def prime_factors(number)
  factors = []
  divisor = 2

  while number > 1
    while number % divisor == 0
      factors << divisor
      number /= divisor
    end
    divisor += 1
  end

  factors
end

puts smallest_mult(5) # 60
puts smallest_mult(7) # 420
puts smallest_mult(10) # 2520
puts smallest_mult(13) # 360360
puts smallest_mult(20) # 232792560
