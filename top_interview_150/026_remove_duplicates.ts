/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
}

export { removeDuplicates };
