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
    new Map([...map.entries()].sort((a, b) => b[1] - a[1])).keys()
  );

  return sortedArr.slice(0, k);
}

function topKFrequent2(nums, k) {
  let map = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (let [num, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }

  return result;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent1(nums, k) {
  let freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }

  return result;
}

topKFrequent2([3, 0, 1, 0], 2);
// assert.deepEqual(topKFrequent([3, 0, 1, 0], 1), [0]);
// // return the 2 most frequent nums
// assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
// assert.deepEqual(topKFrequent([1], 1), [1]);
