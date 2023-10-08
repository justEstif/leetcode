# @param {Integer[]} nums
# @return {Integer} The element that appears more than n/2 times
def majority_element_bad(nums)
  # create hash map
  hash_map = Hash.new(0)
  max_count = 0
  majority_element = nil

  # loop through array and keep count in hash
  nums.each do |num|
    hash_map[num] += 1
    if hash_map[num] > max_count
      max_count = hash_map[num]
      majority_element = num
    end
  end

  # return el
  majority_element
end

# @param {Integer[]} nums
# @return {Integer} The element that appears more than n/2 times
def majority_element(nums)
# there is another better way to do this
end
