# A palindromic number reads the same both ways.
# The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
# Find the largest palindrome made from the product of two n-digit numbers.

# @params {Integer} number
# @return {Integer}
def largest_palindrome_product(n)
  max = ('9' * n).to_i
  min = (max + 1) / 10 # smallest n digit number
  largest = -1

  max.downto(min) do |i|
    max.downto(min) do |j|
      num = i * j
      num_reverse = num.to_s.reverse.to_i

      if num == num_reverse
        largest = [num, largest].max
        break
      end
    end
  end

  largest
end

puts largest_palindrome_product(2) # 9009
puts largest_palindrome_product(3) # 906609
