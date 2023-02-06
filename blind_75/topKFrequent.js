import assert from "assert";
// Given an integer array nums and an integer k,
// return the k most frequent elements.
// You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let sortedArr = Array.from(
    new Map([...map.entries()].sort((a, b) => a - b)).keys()
  );

  return sortedArr.slice(0, k);
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent1(nums, k) {
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const frequency = new Array();
  for (let [num, count] of map.entries()) {
    frequency[count] = num;
  }

  return frequency.slice(frequency.length - k, frequency.length);
}
// // return the 2 most frequent nums
// assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
// assert.deepEqual(topKFrequent([1], 1), [1]);
