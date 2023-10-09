# Given an integer array nums, find the subarray
# with the largest sum, and return its sum.
# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
  max_sum = nums[0]
  current_sum = 0

  nums.each do |num|
    current_sum = [num, current_sum + num].max
    max_sum = [max_sum, current_sum].max
  end
  max_sum
end

puts max_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4]) # 6
puts max_sub_array([1]) # 1
puts max_sub_array([5, 4, -1, 7, 8]) # 23
