# @param {String} string
def reverse_string(string)
  reversed_string = ''
  (string.length - 1).downto(0) do |i|
    reversed_string << string[i]
  end
  reversed_string
end

puts reverse_string("1, 2, 3, 4, 5")

puts reverse_string("1, 2, 3, 4, 5")
