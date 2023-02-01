/**
 * @param {number[]} nums
 * @returns {boolean}
 * brute force time-complexity: O(n^2), space-complexity: O(1)
 */
const contains_duplicate_me = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    nums.splice(i, 1);
    if (nums.includes(i)) return true;
  }
  return false;
};

/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const contains_duplicate = (nums) => {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

var containsDuplicate = function(nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

const nums_1 = [1, 2, 3, 1];
const ans_1 = contains_duplicate(nums_1);

console.assert(ans_1, "answer 1 is true");
