class Solution
  # @param {String} s
  # @return {Integer}
  # given string s, find the longest palindrome
  # words that are the same forward and backward
  # case sensitive
  def longest_palindrome(s)
    hash_map = Hash.new(0)

    s.each_char do |c|
      hash_map[c] += 1
    end

    has_odd_frequency = false
    sum_of_even_frequencies = 0

    hash_map.each_value do |freq|
      if freq.even?
        sum_of_even_frequencies += freq
      else
        has_odd_frequency = true
        sum_of_even_frequencies += freq - 1
      end
    end

    sum_of_even_frequencies += 1 if has_odd_frequency

    sum_of_even_frequencies
  end
end
