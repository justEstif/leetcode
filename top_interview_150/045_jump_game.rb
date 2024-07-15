=begin
You are given a 0-indexed array of integers nums of length n

You are initially positioned at nums[0]

Return the minimun number of jumps to reach nums[n-1]
=end

# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
  n = nums.length
  return 0 if n == 1

  jumps = 0
  current_end = 0
  farthest = 0

  for i in 0..n - 2
    farthest = [farthest, i + nums[i]].max
    if i == current_end
      jumps += 1
      current_end = farthest
    end
  end

  jumps
end

p jump([2, 3, 1, 1, 4]) # expected 2
p jump([2, 3, 0, 1, 4]) # expected 2
