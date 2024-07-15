# @param {Integer[]} nums
def can_jump(nums)
  goal = nums.length - 1

  (goal - 1).downto(0) do |i|
    goal = i if i + nums[i] >= goal
  end

  goal.zero?
end
