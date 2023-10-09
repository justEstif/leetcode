# Given an integer array nums, return true if any value appears at least twice
# Return false if every element is distinct
# @param {Integer[]} nums
# @return {Boolean}

# This is the inefficent way to do it
def ccontains_duplicate(nums)
  # Worst case space O(n)
  hash_map = Hash.new(0)

  # Worst case time O(n)
  nums.each do |num|
    hash_map[num] += 1
    return true if hash_map[num] >= 2
  end
  false
end

def contains_duplicate(nums)
  seen = Set.new

  nums.each do |num|
    return true if seen.include?(num)

    seen.add(num)
  end

  false
end
