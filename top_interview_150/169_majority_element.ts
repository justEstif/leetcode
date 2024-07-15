/**
 * Given an array nums of size n, return the majority element
 * the element that appears more than [n/2] times
 */

function majorityElement(nums: number[]): number {
  let count = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) res = nums[i];
    (nums[i] === res) ? count++ : count--;
  }

  return res;
}

export { majorityElement };
