const assert = require("assert");
// Find the Difference of Two Arrays
function diffSet(list1, list2) {
  const hashMap = {}; // el: [index]

  for (const val of list1) {
    if (!hashMap[val]) hashMap[val] = 0;
    hashMap[val]++;
  }

  for (const val of list2) {
    if (!hashMap[val]) hashMap[val] = 0;
    hashMap[val]++;
  }
  return [];
}

const exampe1 = diffSet([1, 2, 3, 4], [1, 2, 3, 4]);
const answer1 = [];

assert.deepEqual(exampe1, answer1);

const exampe2 = diffSet([1, 2, 3, 4], [1, 2, 3, 4, 5]);
const answer2 = [5];

assert.deepEqual(exampe2, answer2);

const exampe3 = diffSet([1, 2, 3, 4], [1, 2, 3, 4, 5]);
const answer3 = [5];

assert.deepEqual(exampe3, answer3);
