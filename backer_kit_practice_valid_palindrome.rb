# @param {String}
def valid_palindrome(str)
  str = str.downcase.gsub(/[^[:alnum:]]/, "")

  left = 0
  right = str.length - 1

  while left <= right
    return false if str[left] != str[right]
    left += 1
    right -= 1
  end
  true
end

puts valid_palindrome("A man, a plan, a canal: Panama") # true
