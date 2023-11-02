# @param {Array<Integer>}
def reverse_array(array)
  reversed_array = []
  (array.length - 1).downto(0) do |i|
    reversed_array << array[i]
  end

  ## My Solution
  # (0...array.length).each do |i|
  #   reversed_array.unshift(array[i])
  # end
  reversed_array
end

puts reverse_array([1, 2, 3, 4, 5])
