# Given an array of integers nums and an integer target,
# return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

class Solution:
    def twoSum2(self, nums: list[int], target: int) -> list[int]:
        for i in range(len(nums)):
            if nums[i+1]:
                if nums[i] + nums[i+1] == target:
                    return [i, i+1]
        return []

    def twoSum(self, nums: list[int], target: int) -> list[int]:
        prevMap = {}  # val, index
        for i, val in enumerate(nums):
            diff = target - val
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[val] = i
        return []


soln = Solution()

input_1 = [2, 7, 11, 15]
target_1 = 9
output_1 = [0, 1]

soln.twoSum(nums=input_1, target=target_1)
# assert output_1 == soln.twoSum(nums=input_1, target=target_1)
