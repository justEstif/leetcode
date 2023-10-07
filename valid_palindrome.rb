# @param {String} s
# @return {Boolean}
def is_palindrome(s)
  s = s.downcase.gsub(/[^a-z0-9]/, '')

  left = 0
  right = s.length - 1

  while left < right
    return false if s[left] != s[right]

    left += 1
    right -= 1
  end
  true
end

# split, trim, reverse, compare

# @param {String} c
# @return {Boolean}
def alphanumeric?(c)
  c =~ /[[:alnum:]]/
end

puts is_palindrome('A man, a plan, a canal: Panama') # true
puts is_palindrome('race a car') # false
puts is_palindrome(' ') # true
