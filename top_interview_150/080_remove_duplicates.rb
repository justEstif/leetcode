# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  l = 0
  r = 0

  while r < nums.length
    count = 1

    while r + 1 < nums.length && nums[r] == nums[r + 1]
      r += 1
      count += 1
    end

    [2, count].min.times do
      nums[l] = nums[r]
      l += 1
    end

    r += 1
  end

  l
end
