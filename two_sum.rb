# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  # target - num = index
  hash_map = {}
  nums.each_with_index do |el, i|
    diff = target - el
    return [hash_map[diff], i] if hash_map.key?(diff)

    hash_map[el] = i
  end
end

print two_sum([2, 7, 11, 15], 9) # [0, 1]
print two_sum([3, 2, 4], 6) # [1, 2]
print two_sum([3, 3], 6) # [0, 1]
