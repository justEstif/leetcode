/**
 * Given an integer array `nums`, rotate the array to the right by k steps
 * Do not return anything, modify nums in-place instead.
 */

function rotate(nums: number[], k: number): void {
  k = k % nums.length; // Ensure k is within the range of array length
  if (k === 0) return; // If k is 0, no need to rotate

  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
    l++;
    r--;
  }

  l = 0;
  r = k - 1;

  while (l < r) {
    const tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
    l++;
    r--;
  }

  l = k;
  r = nums.length - 1;

  while (l < r) {
    const tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
    l++;
    r--;
  }
  // // reverse the whole array
  // // reverse the first k element and the rest
  //
  // // Get the last k elements and add to the beginning
  // const removed = nums.splice(nums.length - k, k);
  // nums.unshift(...removed);
}

export { rotate };
