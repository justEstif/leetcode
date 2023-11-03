/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove some duplicates in-place such that each unique element appears at most twice.
 * Return k after placing the final result in the first k slots of nums.
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length < 3) {
    return nums.length;
  }

  // start from the second index

  let uniqueCount = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i - 2]) {
      console.log({ uniqueCount, nums });
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  console.log("FINAL");
  console.log({ uniqueCount, nums });

  return uniqueCount;
}

export { removeDuplicates };
