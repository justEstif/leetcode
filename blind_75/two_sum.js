const assert = require("assert");

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) return [i, i + 1];
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[] | null}
 */
const twoSum2 = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (hashMap.has(difference)) {
      return [hashMap.get(difference), i];
    }
    hashMap.set(nums[i], i);
  }
  return [];
};

const example1 = [2, 7, 11, 15];
const answer1 = [0, 1];

const example2 = [3, 2, 4];
const answer2 = [1, 2];

assert.deepEqual(twoSum2(example1, 9), answer1);
assert.deepEqual(twoSum2(example2, 6), answer2);
