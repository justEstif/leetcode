// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
const assert = require("assert");

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hashMap = {};
  for (const ch of s) {
    if (!hashMap[ch]) hashMap[ch] = 0;
    hashMap[ch]++;
  }
  for (const ch of t) {
    if (!hashMap[ch]) return false;
    hashMap[ch]--;
  }
  return true;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  let groups = [];
  for (let i = 0; i < strs.length; i++) {
    let group = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      if (isAnagram(strs[i], strs[j])) {
        group.push(strs[j]);
        strs.splice(j, 1);
      }
    }
    groups.push(group);
  }
  return groups;
};

// video solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams2 = function (strs) {
  const hashMap = new Map(); // mapping charCount to list of anagrams

  for (const str of strs) {
    const counts = new Map();
    for (const ch of str) {
      const count = counts.get(ch) ?? 0;
      counts.set(ch, count + 1);
    }
    const anagrams = hashMap.get(counts) ?? 0;
    console.log({counts})
    hashMap.set(counts, anagrams ? [str, ...anagrams] : [str]);
  }
  return hashMap;
};

const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const answer1 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
// assert.deepEqual(groupAnagrams(input1), answer1);

console.log(groupAnagrams2(input1));
