# Given a string s, find the length of the longest substring without repeating characters.
# @param {String} s
# @return {Integer}
def bad_length_of_longest_substring(s)
  if s.length == 1
    return 1
  end
  max_length = 0

  longest_substring = ""
  current_length = 0

  s.each_char do |char|
    if longest_substring.include?(char)
      max_length = [current_length, max_length].max

      # reset
      longest_substring = char
      current_length = 1
    else
      longest_substring << char
      current_length += 1
    end
  end

  max_length
end

def length_of_longest_substring(s)
  char_set = Set.new()

  l = 0
  res = 0
  (0...s.length).each do |r|
    while char_set.include?(s[r])
      char_set.delete(s[l])
      l += 1
    end
    char_set.add(s[r])
    res = [res, r - l + 1].max
  end
  res
end

p length_of_longest_substring("abcabcbb") # 3
p length_of_longest_substring("bbbbb") # 1
p length_of_longest_substring("pwwkew") # 3
p length_of_longest_substring(" ") # 1
